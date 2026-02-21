import Link from "next/link"

export default function Transmission() {
	return (
		<section className="max-w-7xl mx-auto px-6 py-16 md:py-24 bg-neutral-50/50 rounded-3xl mb-8">
			<div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-0">
				<div>
					<h2 className="font-hanson text-2xl md:text-3xl lg:text-4xl text-neutral-900 uppercase">Incoming Transmissions</h2>
					<p className="text-neutral-500 text-sm md:text-base font-medium mt-2">The latest intel straight from the nexus.</p>
				</div>
				<Link href="https://ohayoupost.com/?utm_source=otabyte&utm_medium=landing_page&utm_campaign=incoming_transmissions" className="flex text-neutral-900 font-bold items-center gap-2 hover:text-cyan-500 transition-colors">
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
	)
}