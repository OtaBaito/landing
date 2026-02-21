import Link from 'next/link'

export default function Page() {
	return (
		<main className="max-w-7xl mx-auto px-6 pb-24 flex flex-col items-center">
			<div className="w-full max-w-2xl bg-neutral-50 rounded-[2.5rem] p-12 md:p-16 border border-neutral-100 text-center space-y-8">
				<h1 className="text-4xl md:text-6xl font-black text-neutral-900 tracking-tight">Get in touch</h1>
				<p className="text-xl text-neutral-600 font-medium leading-relaxed">
					Have a question or want to collaborate? <br className="hidden md:block" />
					Drop us a line and let’s start something great together.
				</p>
				<div className="pt-8">
					<Link
						href="mailto:otaku@otabyte.net"
						className="text-2xl md:text-4xl font-bold text-sky-500 hover:text-sky-600 transition-colors underline decoration-sky-500/20 underline-offset-8"
					>
						otaku@otabyte.net
					</Link>
				</div>
			</div>
		</main>
	)
}