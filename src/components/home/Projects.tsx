import Link from "next/link"
import Image from "next/image"

export default function Projects() {
	return (
		<section id="quest-board" className="max-w-7xl mx-auto px-6 py-16 md:py-24 scroll-mt-12">
			<div className="text-center mb-12 md:mb-16 space-y-4">
				<h2 className="font-hanson text-3xl md:text-4xl lg:text-5xl text-neutral-900 uppercase">The Quest Board</h2>
				<p className="text-neutral-500 text-base md:text-lg font-medium max-w-2xl mx-auto">Select your mission. Dive into our latest creations and become part of the guild.</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* Card 1: Indie Game */}
				<Link href="#" className="group relative bg-neutral-900 rounded-xl overflow-hidden shadow-lg border border-neutral-800 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
					<div className="aspect-[16/10] overflow-hidden relative">
						<div className="absolute inset-0 bg-neutral-800 group-hover:bg-neutral-700 transition-colors"></div>
						{/* Placeholder geometric art for indie game */}
						<div className="absolute inset-0 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-cyan-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
								<path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
							</svg>
						</div>
						<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
					</div>
					<div className="p-8 relative z-10">
						<div className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-2">Main Quest</div>
						<h3 className="text-2xl font-bold text-white mb-3">Indie Game Dev</h3>
						<p className="text-neutral-400 text-sm leading-relaxed mb-6">Explore breathtaking worlds and compelling narratives powered by cutting-edge design and anime aesthetics.</p>
						<div className="text-white font-semibold flex items-center gap-2 group-hover:text-cyan-300 transition-colors">
							Play Now
							<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
							</svg>
						</div>
					</div>
				</Link>

				{/* Card 2: VTuber Agency */}
				<Link href="#" className="group relative bg-neutral-900 rounded-xl overflow-hidden shadow-lg border border-neutral-800 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
					<div className="aspect-[16/10] overflow-hidden relative">
						<Image
							src="/images/artwork/abdul/lily.jpg"
							alt="VTuber Agency"
							className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
							fill
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>
					</div>
					<div className="p-8 relative z-10">
						<div className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-2">Live Entertainment</div>
						<h3 className="text-2xl font-bold text-white mb-3">VTuber Agency</h3>
						<p className="text-neutral-400 text-sm leading-relaxed mb-6">Join our talented roster of virtual idols as they stream, perform, and connect with fans across the globe.</p>
						<div className="text-white font-semibold flex items-center gap-2 group-hover:text-cyan-300 transition-colors">
							Meet the Idols
							<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
							</svg>
						</div>
					</div>
				</Link>

				{/* Card 3: Fan-Made Merch */}
				<Link href="/merch" className="group relative bg-neutral-900 rounded-xl overflow-hidden shadow-lg border border-neutral-800 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
					<div className="aspect-[16/10] overflow-hidden relative">
						<div className="absolute inset-0 bg-neutral-800 group-hover:bg-neutral-700 transition-colors"></div>
						<div className="absolute inset-0 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-cyan-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
								<path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
							</svg>
						</div>
						<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
					</div>
					<div className="p-8 relative z-10">
						<div className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-2">Physical Loot</div>
						<h3 className="text-2xl font-bold text-white mb-3">Fan-Made Merch</h3>
						<p className="text-neutral-400 text-sm leading-relaxed mb-6">Grab exclusive apparel, figures, and accessories crafted with passion for our incredible community.</p>
						<div className="text-white font-semibold flex items-center gap-2 group-hover:text-cyan-300 transition-colors">
							Shop Loot
							<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
							</svg>
						</div>
					</div>
				</Link>
			</div>
		</section>
	)
}