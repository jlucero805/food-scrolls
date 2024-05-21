import ButtonLink from "@/components/ButtonLink";
import Menu from "@/components/Menu";
import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";
import { useState } from "react";

export default async function Layout({
	children,
}: Readonly<{
	children: React.ReactNode,
}>) {
	const session = await getSession();

	return (
		<div className="flex flex-col space-y-1">
			<div className="flex flex-row justify-between px-2 py-3">
				<div>
					<h1 className="text-xl font-bold tracking-tighter">Food Scrolls</h1>
				</div>
				<div className="space-x-1">
					{
						<ButtonLink text="Logout" href="/api/auth/logout" />
					}
				</div>
			</div>
			<hr />
			<div className="flex justify-between px-2">
				<Menu />
				<div className="flex space-x-3 px-2 items-center">
							<Image
								className={"rounded"}
								width={25}
								height={25}
								src={session!.user.picture}
								alt={session!.user.name}
							/>
							<h2 className="font-bold tracking-tighter text-sm">{session!.user.name}</h2>
							<p className="font-bold tracking-tighter text-sm">{session!.user.email}</p>
				</div>
			</div>
			<hr />
			<div className="px-3 py-2">
				{children}
			</div>
		</div>
	)
}