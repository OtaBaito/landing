import Mascot from '@/assets/images/abdul/lily.jpg'
import { Scribble } from '@/components/generic'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
	return (
		<main className="max-w-7xl mx-auto px-6 pb-24">
			<div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
				<div className="flex-1 space-y-12">
					<h1 className="text-6xl lg:text-8xl font-black tracking-tight leading-[1.1] text-neutral-900">
						Made<br />
						<span className="text-sky-500">Hobby</span>
						<div className="inline-block md:block">to <span className="relative inline-block px-2">
							<span className="relative z-10 underline decoration-sky-500/30 underline-offset-8">Creativity.</span>
							<Scribble className="absolute -inset-1 z-0 h-full w-full text-sky-400 opacity-20" />
						</span></div>
					</h1>
					<p className="max-w-xl text-xl lg:text-2xl text-neutral-600 font-medium leading-relaxed">
						Our passion is meant to unlock a new world full of <span className="relative group cursor-default">
							<span className="relative z-10 font-bold decoration-sky-500/50 underline underline-offset-4">creativity.</span>
							<span className="absolute -inset-1 bg-sky-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
						</span> We empower hobbyists to turn their dreams into reality through community and innovation.
					</p>
					<div className="flex gap-4 pt-4">
						<Link href="/projects" className="px-8 py-4 bg-neutral-900 text-white font-bold rounded-2xl hover:bg-neutral-800 transition-all hover:shadow-xl active:scale-95">
							Explore Projects
						</Link>
						<Link href="/about" className="px-8 py-4 bg-white border-2 border-neutral-100 text-neutral-900 font-bold rounded-2xl hover:border-neutral-200 transition-all active:scale-95">
							About Us
						</Link>
					</div>
				</div>
				<div className="flex-1 w-full max-w-2xl">
					<div className="relative aspect-4/5 md:aspect-3/4 rounded-4xl overflow-hidden">
						<Image
							className="object-cover"
							src={Mascot}
							alt="Lily the Mascot"
							fill
							priority
						/>
					</div>
				</div>
			</div>
		</main>
	)
}
