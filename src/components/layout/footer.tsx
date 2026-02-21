import { socials } from '@/app/contact/page'
import { faDiscord, faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Component() {
	return (
		<footer className="max-w-7xl mx-auto px-6 py-16 border-t border-neutral-100 flex flex-col lg:flex-row items-center justify-between gap-8">
			<div className="text-[11px] uppercase tracking-widest text-neutral-400 text-center lg:text-left">
				<div>&copy; 2019 - {new Date().getFullYear()} <Link className="font-bold text-neutral-600 hover:text-sky-600 transition-colors" href="https://www.otabyte.net/">OtaByte</Link>, Sisters of <Link className="font-bold text-neutral-600 hover:text-sky-600 transition-colors" href="https://sabako.id/">SABAKO</Link>.</div>
				<div className="opacity-70 italic whitespace-nowrap">Any branding material are partly licensed.</div>
			</div>
			<div className="flex flex-col items-center lg:items-end gap-5">
				<div className="text-[11px] uppercase tracking-widest text-neutral-400">
					<Link href="mailto:contact@otabyte.net" className="font-bold text-neutral-600 hover:text-cyan-400 transition-colors">
						contact@otabyte.net
					</Link>
				</div>
				<div className="flex items-center space-x-6 text-neutral-400">
					{socials.map(social => (
						<Link key={social.name} href={social.link} aria-label={social.name} className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
							<FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
						</Link>
					))}
				</div>
			</div>
		</footer>
	)
}