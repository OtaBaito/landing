export default function ContactPage() {
	return (
		<main className="w-full bg-white flex flex-col min-h-[80vh]">
			<section className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 md:py-24">

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 relative">
					{/* Vertical Divider Line for Desktop */}
					<div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-neutral-200 to-transparent -translate-x-1/2"></div>

					{/* Left Column: The Uplink Form */}
					<div className="flex flex-col">
						<h2 className="font-hanson text-3xl md:text-4xl lg:text-5xl text-neutral-900 uppercase mb-6 md:mb-8">Send A Message</h2>

						<div className="w-full bg-white rounded-2xl shadow-xl shadow-neutral-200/50 border border-neutral-100 p-6 sm:p-8 md:p-10 relative overflow-hidden flex-1">
							{/* Decorative top border */}
							<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500"></div>

							<form className="space-y-6">
								<div>
									<label htmlFor="name" className="block text-xs font-bold text-neutral-900 uppercase tracking-widest mb-2">Identifier (Name)</label>
									<input
										type="text"
										id="name"
										name="name"
										placeholder="Enter your name"
										className="w-full px-4 py-3 bg-white border-2 border-neutral-200 rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-0 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all font-medium"
										required
									/>
								</div>

								<div>
									<label htmlFor="email" className="block text-xs font-bold text-neutral-900 uppercase tracking-widest mb-2">Comms Link (Email)</label>
									<input
										type="email"
										id="email"
										name="email"
										placeholder="admin@example.com"
										className="w-full px-4 py-3 bg-white border-2 border-neutral-200 rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-0 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all font-medium"
										required
									/>
								</div>

								<div>
									<label htmlFor="message" className="block text-xs font-bold text-neutral-900 uppercase tracking-widest mb-2">Transmission Data (Message)</label>
									<textarea
										id="message"
										name="message"
										rows={5}
										placeholder="Enter your message..."
										className="w-full px-4 py-3 bg-white border-2 border-neutral-200 rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-0 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all font-medium resize-none"
										required
									></textarea>
								</div>

								<button
									type="submit"
									className="w-full py-4 mt-2 bg-cyan-500 text-neutral-900 font-bold uppercase tracking-widest rounded-lg hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
								>
									Transmit
									<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
										<path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7m0 0l-7 7m7-7H3" />
									</svg>
								</button>
							</form>
						</div>
					</div>

					{/* Right Column: Direct Comms & SNS */}
					<div className="flex flex-col lg:pl-8 justify-center mt-4 sm:mt-8 lg:mt-0">
						<h2 className="font-hanson text-3xl md:text-4xl lg:text-5xl text-neutral-900 uppercase mb-6 md:mb-8">Direct Comms</h2>

						<div className="space-y-8 md:space-y-12">
							<div>
								<div className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-2">Official Channel</div>
								<a href="mailto:contact@otabyte.net" className="text-2xl md:text-3xl font-bold text-neutral-900 hover:text-cyan-500 hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all">
									contact@otabyte.net
								</a>
								<p className="text-neutral-500 font-medium mt-4 max-w-md">
									Reach out to the guild for business inquiries, collaborations, or support. We monitor these channels actively.
								</p>
							</div>

							<div>
								<div className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-6">Network Nodes (Socials)</div>
								<div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
									<a href="#" aria-label="Twitter/X" className="flex items-center justify-center aspect-square rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-600 hover:text-cyan-500 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all group">
										<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
											<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
										</svg>
									</a>
									<a href="#" aria-label="YouTube" className="flex items-center justify-center aspect-square rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-600 hover:text-cyan-500 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all group">
										<svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
											<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
										</svg>
									</a>
									<a href="#" aria-label="Twitch" className="flex items-center justify-center aspect-square rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-600 hover:text-cyan-500 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all group">
										<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
											<path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"></path>
										</svg>
									</a>
									<a href="#" aria-label="Discord" className="flex items-center justify-center aspect-square rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-600 hover:text-cyan-500 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all group">
										<svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 group-hover:scale-110 transition-transform" viewBox="0 0 127.14 96.36" fill="currentColor">
											<path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.68,2a68.68,68.68,0,0,1-10.87,5.19,77.7,77.7,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.12,53,91.08,65.69,84.69,65.69Z"></path>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>

				</div>
			</section>
		</main>
	)
}