import Image from 'next/image'

export default function ProjectsPage() {
	return (
		<main className="w-full bg-white pb-32">
			{/* Projects Header */}
			<section className="max-w-7xl mx-auto px-6 pt-12 pb-16 text-center">
				<div className="inline-block px-4 py-1.5 rounded-full border border-neutral-300 text-neutral-500 font-bold text-sm tracking-widest uppercase mb-4">
					The Quest Log
				</div>
				<h1 className="font-hanson text-5xl md:text-7xl lg:text-8xl tracking-tight text-neutral-900 uppercase drop-shadow-sm">
					Our Projects
				</h1>
			</section>

			{/* Section A: Indie Game */}
			<section className="max-w-7xl mx-auto px-6 py-16 border-t border-neutral-100">
				{/* Game Hero Banner Placeholder */}
				<div className="w-full aspect-video bg-neutral-900 rounded-3xl overflow-hidden relative shadow-2xl mb-12 flex items-center justify-center group">
					<div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.4)_0%,transparent_70%)]"></div>
					<svg xmlns="http://www.w3.org/2000/svg" className="w-32 h-32 text-cyan-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
						<path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
					</svg>
					<div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-neutral-900 to-transparent">
						<div className="font-hanson text-3xl md:text-5xl text-white uppercase tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Project: Astral Frame</div>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row gap-16">
					<div className="flex-1 space-y-6">
						<h2 className="font-hanson text-3xl md:text-4xl text-neutral-900 uppercase">A New Reality Awaits</h2>
						<p className="text-lg text-neutral-600 font-medium leading-relaxed">
							Dive into a breathtaking sci-fi universe where humanity clings to the edge of the cosmos. Pilot incredible mechs, form unbreakable bonds, and unravel the mysteries of the Void in our upcoming flagship indie title.
						</p>
						<div className="pt-4">
							<a href="#" className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 text-neutral-900 font-black tracking-widest uppercase rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.6)] hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] transition-all hover:-translate-y-1 active:scale-95">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
									<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
								</svg>
								Wishlist Now
							</a>
						</div>
					</div>
					<div className="flex-1">
						{/* 3-column features/screenshots grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
							<div className="aspect-video bg-neutral-200 rounded-xl overflow-hidden relative group">
								<div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors"></div>
								<div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-neutral-900">High-Octane Combat</div>
							</div>
							<div className="aspect-video bg-neutral-300 rounded-xl overflow-hidden relative group">
								<div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors"></div>
								<div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-neutral-900">Deep Customization</div>
							</div>
							<div className="aspect-video bg-neutral-200 rounded-xl overflow-hidden relative group md:col-span-2">
								<div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors"></div>
								<div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-neutral-900">Immersive Narrative</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Section B: VTuber Agency */}
			<section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-100 bg-neutral-50/50 mt-12 rounded-t-[3rem]">
				<div className="text-center mb-16 space-y-4">
					<h2 className="font-hanson text-4xl md:text-5xl text-neutral-900 uppercase">Talent Roster</h2>
					<p className="text-neutral-500 text-lg font-medium max-w-2xl mx-auto">Meet the digital idols bringing our worlds to life across the internet.</p>
				</div>

				{/* Talent Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

					{/* Talent Card 1 */}
					<div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-neutral-200 hover:border-cyan-400 hover:shadow-[0_10px_30px_rgba(6,182,212,0.2)] transition-all duration-300 hover:-translate-y-2">
						<div className="aspect-[3/4] bg-neutral-100 relative overflow-hidden flex items-center justify-center border-b border-neutral-100">
							{/* Placeholder for VTuber Model */}
							<div className="absolute inset-0 bg-gradient-to-tr from-cyan-100 to-transparent"></div>
							<svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-neutral-300 group-hover:scale-110 transition-transform duration-500 relative z-10" viewBox="0 0 24 24" fill="currentColor">
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
							</svg>
						</div>
						<div className="p-6 text-center">
							<h3 className="font-bold text-xl text-neutral-900 mb-2">Astra Nyx</h3>
							<p className="text-sm text-neutral-500 font-medium mb-6 line-clamp-2">A celestial observer turned chaotic gamer. Specializes in FPS and rhythm games.</p>
							<div className="flex items-center justify-center gap-4 text-neutral-400">
								<a href="#" className="hover:text-cyan-500 transition-colors">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
										<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
									</svg>
								</a>
								<a href="#" className="hover:text-cyan-500 transition-colors">
									<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
										<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
									</svg>
								</a>
							</div>
						</div>
					</div>

					{/* Talent Card 2 */}
					<div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-neutral-200 hover:border-cyan-400 hover:shadow-[0_10px_30px_rgba(6,182,212,0.2)] transition-all duration-300 hover:-translate-y-2">
						<div className="aspect-[3/4] bg-neutral-100 relative overflow-hidden flex items-center justify-center border-b border-neutral-100">
							<div className="absolute inset-0 bg-gradient-to-tr from-cyan-100 to-transparent"></div>
							<svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-neutral-300 group-hover:scale-110 transition-transform duration-500 relative z-10" viewBox="0 0 24 24" fill="currentColor">
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
							</svg>
						</div>
						<div className="p-6 text-center">
							<h3 className="font-bold text-xl text-neutral-900 mb-2">Kira byte</h3>
							<p className="text-sm text-neutral-500 font-medium mb-6 line-clamp-2">A rogue AI who loves solving puzzles and chatting with human developers.</p>
							<div className="flex items-center justify-center gap-4 text-neutral-400">
								<a href="#" className="hover:text-cyan-500 transition-colors">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
										<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
									</svg>
								</a>
								<a href="#" className="hover:text-cyan-500 transition-colors">
									<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
										<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
									</svg>
								</a>
							</div>
						</div>
					</div>

					{/* Talent Card 3 */}
					<div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-neutral-200 hover:border-cyan-400 hover:shadow-[0_10px_30px_rgba(6,182,212,0.2)] transition-all duration-300 hover:-translate-y-2">
						<div className="aspect-[3/4] bg-neutral-100 relative overflow-hidden flex items-center justify-center border-b border-neutral-100">
							<div className="absolute inset-0 bg-gradient-to-tr from-cyan-100 to-transparent"></div>
							<svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-neutral-300 group-hover:scale-110 transition-transform duration-500 relative z-10" viewBox="0 0 24 24" fill="currentColor">
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
							</svg>
						</div>
						<div className="p-6 text-center">
							<h3 className="font-bold text-xl text-neutral-900 mb-2">Leon Sparks</h3>
							<p className="text-sm text-neutral-500 font-medium mb-6 line-clamp-2">Speedrunner and hype man. Known for breaking games and setting world records live.</p>
							<div className="flex items-center justify-center gap-4 text-neutral-400">
								<a href="#" className="hover:text-cyan-500 transition-colors">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
										<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
									</svg>
								</a>
								<a href="#" className="hover:text-cyan-500 transition-colors">
									<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
										<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
									</svg>
								</a>
							</div>
						</div>
					</div>

					{/* Talent Card 4: TBD */}
					<div className="group border-2 border-dashed border-neutral-300 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-8 text-neutral-400 hover:border-cyan-400 hover:text-cyan-500 hover:bg-cyan-50/30 transition-all duration-300 aspect-[3/4]">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
							<path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						<h3 className="font-hanson uppercase tracking-widest">Incoming...</h3>
						<p className="text-sm font-medium mt-2">Next generation talent currently in training.</p>
					</div>

				</div>
			</section>

			{/* Section C: Alliances & Collaborations */}
			<section className="max-w-7xl mx-auto px-6 py-24 bg-white">
				<div className="text-center mb-16 space-y-4">
					<h2 className="font-hanson text-4xl md:text-5xl text-neutral-900 uppercase">Alliances & Collaborations</h2>
					<p className="text-neutral-500 text-lg font-medium max-w-2xl mx-auto">Projects and communities born from the OtaByte network.</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Partner 1: Ohayou Post */}
					<a href="/ohayou" className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-2 border-neutral-800 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 hover:-translate-y-2 flex flex-col">
						<div className="aspect-video bg-neutral-100 relative overflow-hidden flex items-center justify-center border-b-2 border-neutral-800 group-hover:border-cyan-400 transition-colors">
							<div className="text-neutral-400 font-bold uppercase tracking-widest text-xs">OhayouThumb</div>
						</div>
						<div className="p-6 flex-1 flex flex-col">
							<h3 className="font-bold text-xl text-neutral-900 mb-2">The Ohayou Post</h3>
							<p className="text-sm text-neutral-600 font-medium leading-relaxed">A community-driven news platform for anime and gaming enthusiasts.</p>
						</div>
					</a>

					{/* Partner 2: Izumi Clan */}
					<a href="/izumi" className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-2 border-neutral-800 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 hover:-translate-y-2 flex flex-col">
						<div className="aspect-video bg-neutral-100 relative overflow-hidden flex items-center justify-center border-b-2 border-neutral-800 group-hover:border-cyan-400 transition-colors">
							<div className="text-neutral-400 font-bold uppercase tracking-widest text-xs">IzumiThumb</div>
						</div>
						<div className="p-6 flex-1 flex flex-col">
							<h3 className="font-bold text-xl text-neutral-900 mb-2">Izumi Clan</h3>
							<p className="text-sm text-neutral-600 font-medium leading-relaxed">Cultivating a space for artists and creators to thrive and share their work.</p>
						</div>
					</a>

					{/* Partner 3: Tomodachi */}
					<a href="/tomo" className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-2 border-neutral-800 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 hover:-translate-y-2 flex flex-col">
						<div className="aspect-video bg-neutral-100 relative overflow-hidden flex items-center justify-center border-b-2 border-neutral-800 group-hover:border-cyan-400 transition-colors">
							<div className="text-neutral-400 font-bold uppercase tracking-widest text-xs">IzumiThumb</div>
						</div>
						<div className="p-6 flex-1 flex flex-col">
							<h3 className="font-bold text-xl text-neutral-900 mb-2">Tomodachi</h3>
							<p className="text-sm text-neutral-600 font-medium leading-relaxed">Connecting like-minded individuals through shared hobbies and interests.</p>
						</div>
					</a>

					{/* Partner 4: aByte */}
					<a href="/abyte" className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-2 border-neutral-800 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 hover:-translate-y-2 flex flex-col">
						<div className="aspect-video bg-neutral-100 relative overflow-hidden flex items-center justify-center border-b-2 border-neutral-800 group-hover:border-cyan-400 transition-colors">
							<div className="text-neutral-400 font-bold uppercase tracking-widest text-xs">IzumiThumb</div>
						</div>
						<div className="p-6 flex-1 flex flex-col">
							<h3 className="font-bold text-xl text-neutral-900 mb-2">aByte</h3>
							<p className="text-sm text-neutral-600 font-medium leading-relaxed">Technical solutions and creative experiments from the OtaByte team.</p>
						</div>
					</a>
				</div>
			</section>

		</main>
	)
}