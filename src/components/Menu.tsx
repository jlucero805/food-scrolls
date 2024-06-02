'use client';

import Link from "next/link";
import { useState } from "react";

export default function Menu() {
	const [isOpen, setIsOpen] = useState(false);

	if (!isOpen) {
		return <button className="hover:bg-sky-400/75 rounded px-2" onClick={() => setIsOpen(true)}>☰</button>
	};

	return <div className="fixed top-0 left-0 m-0 p-0 h-screen w-[50vw] bg-white flex flex-col px-3 py-2">
		<div className="flex justify-between py-3">
			<div className="font-bold tracking-tight">Menu</div>
			<button className="font-bold px-1 hover:bg-sky-400/75 rounded" onClick={() => setIsOpen(false)}>X</button>
		</div>
		<Link className="text-sm tracking-tight hover:bg-sky-400/75 py-1 rounded px-3" href="/Application/home" onClick={() => setIsOpen(false)}>Home</Link>
		<Link className="text-sm tracking-tight hover:bg-sky-400/75 py-1 rounded px-3" href="/Application/Scrolls" onClick={() => setIsOpen(false)}>Scrolls</Link>
	</div>
}