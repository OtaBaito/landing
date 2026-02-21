import { faDiscord, faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export const socials = [
	{
		name: 'Instagram',
		icon: faInstagram,
		link: 'https://instagram.com/otabaito',
	},
	{
		name: 'Facebook',
		icon: faFacebook,
		link: 'https://www.facebook.com/otabaito',
	},
	{
		name: 'Discord',
		icon: faDiscord,
		link: 'https://discord.gg/P77B5VD3q7',
	},
	{
		name: 'LinkedIn',
		icon: faLinkedin,
		link: 'https://www.linkedin.com/company/otapro',
	},
	{
		name: 'X (Twitter)',
		icon: faXTwitter,
		link: 'https://x.com/otabaito',
	},
]

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
								<Link href="mailto:contact@otabyte.net" className="text-2xl md:text-3xl font-bold text-neutral-900 hover:text-cyan-500 hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all">
									contact@otabyte.net
								</Link>
								<p className="text-neutral-500 font-medium mt-4 max-w-md">
									Reach out to the guild for business inquiries, collaborations, or support. We monitor these channels actively.
								</p>
							</div>

							<div>
								<div className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-6">Network Nodes (Socials)</div>
								<div className="grid grid-cols-3 sm:grid-cols-5 gap-4 md:gap-6">
									{socials.map((social) => (
										<Link key={social.name} href={social.link} aria-label={social.name} className="flex items-center justify-center aspect-square rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-600 hover:text-cyan-500 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all group">
											<FontAwesomeIcon icon={social.icon} size="xl" className="group-hover:scale-110 transition-transform" />
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>

				</div>
			</section>
		</main>
	)
}