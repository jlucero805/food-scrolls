import { prisma } from "@/db/client";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Home() {
	const session = await getSession();

	const user = await prisma.user.findUnique({
		where: { email: session!.user.email },
	});

	if (!user) {
		try {
			const newUser = await prisma.user.create({
				data: {
					email: session!.user.email,
				},
			});
			console.info(`new user created`, newUser);
		} catch (e) {
			console.error(`Home; failed to create new user: [${e}]`);
			return <div>
				Failed to create new user, please try again later.
			</div>
		}
	}

	return (
		<div>
			hey is here
		</div>
	);
}