import { prisma } from "@/db/client";

export default async function Discover() {
	try {
		const scrolls = await prisma.scroll.findMany();
		return <div>
			<h2 className="font-bold tracking-tight text-lg">
				Discover Food Scrolls
			</h2>
			{
				scrolls.length === 0
				? "There are no scrolls! Please check again later!"
				: "There are scrolls!"
			}
		</div>
	} catch (e) {
		console.error(e);
		return <div>
			Failed to load scrolls, please try again later.
		</div>
	}
}