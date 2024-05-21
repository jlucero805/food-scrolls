import ButtonLink from "@/components/ButtonLink";
import { prisma } from "@/db/client";
import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default async function ProfileServer({ children }: Readonly<{
	children: React.ReactNode,
}>) {
	const session = await getSession();

	return (
		<div>
			<div className="flex flex-row justify-between px-2 py-3">
				<div>
					<h1 className="text-xl font-bold tracking-tighter">Food Scrolls</h1>
				</div>
				<div className="space-x-1">
					<ButtonLink text="Login" href="/api/auth/login" />
				</div>
			</div>
			<div>
				{children}
			</div>
		</div>
	);
}