import Link from 'next/link'

export default function Component() {
	return (
		<footer className="max-w-7xl mx-auto px-6 py-16 border-t border-neutral-100">
			<div className="text-[11px] uppercase tracking-widest text-neutral-400 text-center flex flex-col items-center gap-4 md:flex-row md:justify-between">
				<div>&copy; 2019 - {new Date().getFullYear()} <Link className="font-bold text-neutral-600 hover:text-sky-600 transition-colors" href="https://www.otabyte.net/">OtaByte</Link>, Sisters of <Link className="font-bold text-neutral-600 hover:text-sky-600 transition-colors" href="https://sabako.id/">SABAKO</Link>.</div>
				<div className="opacity-70 italic whitespace-nowrap">Any branding material are partly licensed.</div>
			</div>
		</footer>
	)
}