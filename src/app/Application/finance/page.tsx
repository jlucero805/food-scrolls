import { prisma } from "@/db/client";
import { getSession } from "@auth0/nextjs-auth0";
import { Finance } from "./Finance";

export default async function page() {
	const session = await getSession();

	const user = await prisma.user.findUnique({
		where: { email: session!.user.email }
	});

	return <Finance userId={user!.id} ></Finance>
}

