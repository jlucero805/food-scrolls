'use client';

import { useState } from "react";

export default function Menu() {
	const [isOpen, setIsOpen] = useState(false);

	if (!isOpen) {
		return <button className="hover:bg-sky-400/75 rounded px-2" onClick={() => setIsOpen(true)}>☰</button>
	};

	return <div className="fixed top-0 left-0 m-0 p-0 h-screen w-[50vw] bg-white flex flex-col px-3 py-2">
		<div className="flex justify-between">
			<div className="font-bold tracking-tight">Menu</div>
			<button className="font-bold px-1 hover:bg-sky-400/75 rounded" onClick={() => setIsOpen(false)}>X</button>
		</div>
	</div>
}