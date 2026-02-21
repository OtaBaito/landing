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
					<a href="mailto:contact@otabyte.net" className="font-bold text-neutral-600 hover:text-cyan-400 transition-colors">
						contact@otabyte.net
					</a>
				</div>
				<div className="flex items-center space-x-6 text-neutral-400">
					<a href="#" aria-label="Twitter/X" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
							<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
						</svg>
					</a>
					<a href="#" aria-label="YouTube" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
						<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
							<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
						</svg>
					</a>
					<a href="#" aria-label="Twitch" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
							<path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"></path>
						</svg>
					</a>
					<a href="#" aria-label="Discord" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
						<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 127.14 96.36" fill="currentColor">
							<path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.68,2a68.68,68.68,0,0,1-10.87,5.19,77.7,77.7,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.12,53,91.08,65.69,84.69,65.69Z"></path>
						</svg>
					</a>
				</div>
			</div>
		</footer>
	)
}