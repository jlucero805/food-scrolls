import { prisma } from "@/db/client";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	console.log(searchParams);
	try {
		const expenses = await prisma.expense.findMany({
			where: {
				userId: Number(searchParams.get("userId")),
				createdAt: {
					gte: new Date(Date.now() - (1000 * 60 * 60 * 24 * 7)),
				},
			}
		});
		return Response.json({ data: expenses });
	} catch (e) {
		console.error(e);
		throw e;
	}
};

export async function POST(request: Request) {
	const body = await request.json();
	try {
		const newExpense = await prisma.expense.create({
			data: {
				name: "test",
				amount: 23.43,
				user: { connect: { id: body.id }},
				...(body.createdAt ? {
					createdAt: body.createdAt,
				} : {}),
			},
		});
		console.info("created Expense");
		return Response.json({ expense: newExpense });
	} catch (e) {
		console.error("failed to create expense");
		throw e;
	}
}