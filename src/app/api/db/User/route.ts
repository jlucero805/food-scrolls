import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "GET") {

	} else if (req.method === "POST") {
		console.log(req.body);
		res.status(200).json({
			body: req.body
		});
		/*
		const user = await prisma.user.create({
			data: {
				email: req.body.
			},
		});
		*/
	}
}