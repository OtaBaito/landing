import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
	return (
		<main className="max-w-7xl mx-auto px-6 pb-24">
			<div className="grid lg:grid-cols-12 gap-16 items-start">
				<div className="lg:col-span-12">
					<h1
						className="mb-12 animate-fade-up bg-linear-to-br from-neutral-900 to-neutral-500 bg-clip-text text-5xl md:text-8xl font-black tracking-tight text-transparent opacity-0 text-balance transition-all"
						style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
					>
						Just a brief <br />
						<span className="text-sky-500">of us</span>
					</h1>
				</div>

				<div className="lg:col-span-7 space-y-16">
					<section className="bg-neutral-50 rounded-[2.5rem] p-8 md:p-12 border border-neutral-100 animate-fade-up opacity-0" style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>
						<h3 className="text-2xl font-bold text-neutral-900 mb-6">Who &amp; When</h3>
						<div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
							<p>
								Who we are might rather difficult to answer, as I’m, X, the founder
								itself, written most the story all the time, I don't think OtaByte is a mere community,
								it's more like a family.
							</p>
							<p>
								OtaByte was founded in 2019, as a small community that aspired to be
								a place for hobbyist to share their passion and creativity. The first goal were to make a Visual Novel which actually not really going well since we didn't have enough resource to make it.
							</p>
						</div>
						<div className="mt-12 pt-8 border-t border-neutral-200 italic text-neutral-400 text-sm">
							Frankly, the X itself
						</div>
					</section>

					<section className="animate-fade-up opacity-0" style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}>
						<div className="flex items-center gap-4 mb-8">
							<div className="h-px flex-1 bg-neutral-200"></div>
							<h2 className="text-sm uppercase tracking-[0.2em] font-bold text-neutral-400">Our Essence</h2>
						</div>

						<div className="flex items-baseline gap-3 md:text-3xl font-bold mb-8 text-neutral-900">
							<span>From Minus</span>
							<span className="text-neutral-300 font-medium">for a plus</span>
						</div>

						<div className="space-y-6 text-lg md:text-xl text-neutral-600 leading-relaxed font-medium">
							<p className="text-balance">
								We’re had single purpose in mind, which is which for those our one
								of kind to be entitled as <span className="text-neutral-900 font-bold underline decoration-sky-500/30 underline-offset-4">“Otaku”</span> to not rated as just a mere weebs.
								We withstand any circumstance that might bring disgrace for our
								honor, we tried so hard to make sure people are beneficial from our
								community, not just for us the otaku but for everyone that also
								hobbyist.
							</p>

							<p className="text-balance">
								We are not otaku community, we are the otaku itself. We made hobby
								to creativity as a tool or we could proudly saying it as a motto
								that people could be see us one of great community for pouring their
								potential as hobbyist.
							</p>
						</div>
					</section>

					<section className="animate-fade-up opacity-0" style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}>
						<div className="flex items-center gap-4 mb-8">
							<div className="h-px flex-1 bg-neutral-200"></div>
							<h2 className="text-sm uppercase tracking-[0.2em] font-bold text-neutral-400">Origin Story</h2>
						</div>

						<h3 className="text-2xl font-bold text-neutral-900 mb-6">What &amp; Why</h3>

						<div className="space-y-6 text-lg md:text-xl text-neutral-600 leading-relaxed font-medium">
							<p>
								As <b className="text-neutral-900">Armiko</b> and <b className="text-neutral-900">Zakir</b> had been discussed how great if
								they had own virtual artist agency from seeing many popular vtuber
								and also listen to their hits music, it’s just in early December
								2023 when they had online discussion with the <b className="text-neutral-900">Being X</b> for an
								actual proposal as highest executive on OtaByte.
							</p>

							<p>
								However, the <Link href="https://project.otabyte.net/?utm_source=otabyte.net&utm_medium=referral&utm_campaign=about_page" className="text-sky-500 hover:text-sky-600 underline decoration-sky-500/30 underline-offset-4">project</Link> itself was like a joke. Since Ohayou Post launched,
								we barely maintain it since OtaByte was never making profit in
								the first place. X was aware of this situation since many “project”
								are debunked and closed early before make any more lost to the <Link href="https://sabako.id/?utm_source=otabyte.net&utm_medium=referral&utm_campaign=about_page" className="text-sky-500 hover:text-sky-600 underline decoration-sky-500/30 underline-offset-4">SABAKO</Link> as the parent company that subsidized everything...
							</p>
						</div>
					</section>
				</div>

				<aside className="lg:col-span-5 sticky top-8 flex flex-col gap-8">
					<p className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
						<span className="block text-sky-500 font-bold mb-2 text-sm uppercase tracking-wider">The Roadmap</span>
						<span className="text-neutral-900 font-black">Q1 2026</span> marking the transformation, appreciating every hobby in this world.
					</p>

					<div className="w-full aspect-[3/4] md:aspect-[4/5] bg-neutral-100 rounded-[2.5rem] overflow-hidden relative shadow-2xl animate-fade-up opacity-0 border border-neutral-200" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
						<Image src="/images/akiba.webp" alt="Akihabara" fill className="object-cover hover:scale-105 transition-transform duration-700" priority />
						<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent"></div>
					</div>
				</aside>
			</div>
		</main>
	)
}