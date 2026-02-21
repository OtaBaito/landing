import Mascot from '@/assets/images/abdul/lily.jpg'
import { Scribble } from '@/components/generic'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
	return (
		<main className="max-w-7xl mx-auto px-6 pb-16 md:pb-24">
			<div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-24">
				<div className="flex-1 space-y-8 md:space-y-12">
					<h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tight leading-[1.1] text-neutral-900 animate-fade-up opacity-0" style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>
						Made<br />
						<span className="text-sky-500">Hobby</span>
						<div className="inline-block md:block">to <span className="relative inline-block px-2">
							<span className="relative z-10 underline decoration-sky-500/30 underline-offset-8">Creativity.</span>
							<Scribble className="absolute -inset-1 z-0 h-full w-full text-sky-400 opacity-20" />
						</span></div>
					</h1>
					<p className="max-w-xl text-xl lg:text-2xl text-neutral-600 font-medium leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>
						Our passion is meant to unlock a new world full of <span className="relative group cursor-default">
							<span className="relative z-10 font-bold decoration-sky-500/50 underline underline-offset-4">creativity.</span>
							<span className="absolute -inset-1 bg-sky-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
						</span> We empower hobbyists to turn their dreams into reality through community and innovation.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-up opacity-0" style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}>
						<Link href="/projects" className="px-8 py-4 bg-neutral-900 text-white font-bold rounded-2xl hover:bg-neutral-800 transition-all hover:shadow-xl active:scale-95 text-center">
							Explore Projects
						</Link>
						<Link href="/about" className="px-8 py-4 bg-white border-2 border-neutral-100 text-neutral-900 font-bold rounded-2xl hover:border-neutral-200 transition-all active:scale-95">
							About Us
						</Link>
					</div>
				</div>
				<div className="flex-1 w-full max-w-lg lg:max-w-xl relative animate-fade-up opacity-0" style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}>
					<div className="relative aspect-4/5 md:aspect-[3/4] rounded-2xl overflow-hidden z-10 transform lg:-rotate-2 transition-transform duration-500 hover:rotate-0">
						<Image
							className="object-cover transition-transform duration-700 hover:scale-105"
							src={Mascot}
							alt="Welcome to OtaByte Nexus"
							fill
							priority
						/>
					</div>
				</div>
			</div>
			{/* </section> */}

			{/* Projects Section: The Quest Board */}
			<section id="quest-board" className="max-w-7xl mx-auto px-6 py-16 md:py-24 scroll-mt-12">
				<div className="text-center mb-12 md:mb-16 space-y-4">
					<h2 className="font-hanson text-3xl md:text-4xl lg:text-5xl text-neutral-900 uppercase">The Quest Board</h2>
					<p className="text-neutral-500 text-base md:text-lg font-medium max-w-2xl mx-auto">Select your mission. Dive into our latest creations and become part of the guild.</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Card 1: Indie Game */}
					<Link href="#" className="group relative bg-neutral-900 rounded-xl overflow-hidden shadow-lg border border-neutral-800 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:-translate-y-2">
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
					<Link href="#" className="group relative bg-neutral-900 rounded-xl overflow-hidden shadow-lg border border-neutral-800 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:-translate-y-2">
						<div className="aspect-[16/10] overflow-hidden relative">
							<Image
								src={Mascot}
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
					<Link href="/merch" className="group relative bg-neutral-900 rounded-xl overflow-hidden shadow-lg border border-neutral-800 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:-translate-y-2">
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

			{/* About Section: About the Guild */}
			<section className="max-w-7xl mx-auto px-6 py-16 md:py-24 border-t border-neutral-100">
				<div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
					<div className="flex-1 space-y-6 text-center md:text-left">
						<h2 className="font-hanson text-3xl md:text-4xl lg:text-5xl text-neutral-900 uppercase">About<br className="hidden md:block" />The Guild</h2>
						<div className="w-16 h-1 bg-cyan-400 mx-auto md:mx-0"></div>
						<p className="text-lg md:text-xl text-neutral-600 font-medium leading-relaxed">
							We are a collective of pop-culture enthusiasts, building worlds through games and virtual talents. OtaByte is more than a studio—it's a movement dedicated to turning radical hobbies into bleeding-edge creativity.
						</p>
					</div>
					<div className="flex-1 w-full max-w-md group">
						<div className="relative aspect-square rounded-full border border-neutral-200 overflow-hidden shadow-[0_10px_40px_rgba(6,182,212,0.15)] flex items-center justify-center bg-neutral-50 p-8">
							<div className="absolute inset-0 border-[16px] border-white z-20 rounded-full"></div>
							{/* Stylized placeholder illustration */}
							<Image
								src="/images/artwork/josyifa/megumin_doodle.jpg"
								alt="Artwork of Megumin"
								className="object-cover opacity-80 group-hover:opacity-100 group-hover:rotate-5 group-hover:scale-110 transition-all duration-500"
								fill
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Latest Updates Section: Transmission */}
			<section className="max-w-7xl mx-auto px-6 py-16 md:py-24 bg-neutral-50/50 rounded-3xl mb-8">
				<div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-0">
					<div>
						<h2 className="font-hanson text-2xl md:text-3xl lg:text-4xl text-neutral-900 uppercase">Incoming Transmissions</h2>
						<p className="text-neutral-500 text-sm md:text-base font-medium mt-2">The latest intel straight from the nexus.</p>
					</div>
					<Link href="#" className="flex text-neutral-900 font-bold items-center gap-2 hover:text-cyan-500 transition-colors">
						View All Logs
						<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
						</svg>
					</Link>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* News Card 1 */}
					<Link href="#" className="group bg-white p-6 rounded-xl border border-neutral-200 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:-translate-y-1">
						<div className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-3">Update</div>
						<h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-cyan-600 transition-colors">Project Nexus: Patch v1.0.4 Deployed</h3>
						<p className="text-neutral-500 text-sm line-clamp-3">Major performance updates, new UI features for the command center, and a complete re-balancing of the early-game quests.</p>
						<div className="text-neutral-400 text-xs font-medium mt-6">October 24, 2025</div>
					</Link>
					{/* News Card 2 */}
					<Link href="#" className="group bg-white p-6 rounded-xl border border-neutral-200 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:-translate-y-1">
						<div className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-3">Announcement</div>
						<h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-cyan-600 transition-colors">New VTuber Idol Debut Stream</h3>
						<p className="text-neutral-500 text-sm line-clamp-3">Get your lightsticks ready! Our newest virtual talent makes their highly anticipated debut this weekend on the OtaByte main channel.</p>
						<div className="text-neutral-400 text-xs font-medium mt-6">October 20, 2025</div>
					</Link>
					{/* News Card 3 */}
					<Link href="#" className="group bg-white p-6 rounded-xl border border-neutral-200 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:-translate-y-1">
						<div className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-3">Merch Drop</div>
						<h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-cyan-600 transition-colors">Limited Edition Guild Jackets Available</h3>
						<p className="text-neutral-500 text-sm line-clamp-3">Stock is extremely limited! Grab our new premium streetwear jackets featuring custom embroidery and sci-fi aesthetic prints.</p>
						<div className="text-neutral-400 text-xs font-medium mt-6">October 15, 2025</div>
					</Link>
				</div>
			</section>

		</main >
	)
}
