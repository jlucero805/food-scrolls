'use client';

import { useMutation, useQuery } from "@tanstack/react-query";

export interface FinanceProps {
	userId: number;
}

export function Finance(props: FinanceProps) {


	const mutation = useMutation({
		mutationFn: async () => {
			try {
				const response = await fetch("http://localhost:3000/api/db/Expense", {
					method: "POST",
					body: JSON.stringify({
						id: props.userId,
						createdAt: new Date(Date.now() - (1000 * 60 * 60 * 24 * 7 * 2)),
					}),
				});

				if (response.ok) {
					const json = await response.json();
					console.info(json);
					return json;
				}

				throw new Error(response.statusText);
			} catch (e) {
				console.error(e);
			}
		}
	});

	const {
		data: expenses,
		refetch: refetchExpenses
	} = useQuery({
		queryKey: ["expenses"],
		queryFn: async () => {
			try {
				const response = await fetch("http://localhost:3000/api/db/Expense?" + new URLSearchParams({
					userId: props.userId.toString(),
				}).toString());
				if (response.ok) {
					const json = await response.json();
					console.log(json);
					return json;
				}
				throw new Error(response.statusText);
			} catch (e) {
				console.error(e);
			}
		}
	});

	return (
		<div>
			{mutation.isPending ? (
				"pending"
			) : (
				<>
					{mutation.isError ? (
						<div>error: {mutation.error.message}</div>
					) : null}
					{mutation.isSuccess ? <div>todo added!</div> : null}
					<button
						onClick={() => {
							mutation.mutate();
						}}
					> mutate </button>
				</>
			)}
		</div>
	)
}