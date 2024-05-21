export default function ButtonLink({
	text,
	href,
}: Readonly<{
	text: string,
	href: string,
}>) {
	return (
		<a className="px-2 py-1 rounded bg-sky-400/75 text-white hover:bg-sky-200 text-sm" href={href}> {text} </a>
	)
}