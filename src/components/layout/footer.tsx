import Link from 'next/link'

export default function Component() {
	return (
		<footer className="w-screen">
			<div className="text-xs text-center mb-8 mt-16">&copy; 2019 - 2023 <Link className="font-bold" href="https://www.otabyte.net/">OtaByte</Link>, Sisters of <Link className="font-bold" href="https://sabako.id/">SABAKO</Link>. Any branding material are partly licensed.</div>
		</footer>
	)
}