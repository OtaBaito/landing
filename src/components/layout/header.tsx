'use client'

import Logo from '@/assets/logo/otabyte.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Component() {
	const navigation = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Projects', href: '/projects' },
		{ label: 'Merch', href: '/merch' },
		{ label: 'Contact', href: '/contact' },
	]

	const pathname = usePathname()

	return (
		<header className="flex flex-col lg:flex-row max-w-7xl mx-auto px-6 mt-8 lg:mt-12 mb-16 lg:mb-24 justify-between items-center relative z-50 gap-6 lg:gap-0">
			<Link href="/" className="flex items-center gap-4">
				<Image src={Logo} alt="OtaByte" width={110} height={60} className="w-auto h-6 lg:h-7" />
				<span className="font-hanson text-2xl lg:text-3xl font-bold text-neutral-900 uppercase">OtaByte</span>
			</Link>
			<nav className="flex gap-4 sm:gap-6 lg:space-x-8 items-center flex-wrap justify-center">
				{
					navigation.map((nav) => (
						<Link
							key={nav.href}
							href={nav.href}
							className={`font-bold uppercase text-xs sm:text-sm tracking-widest transition-all duration-300 relative py-1
								${nav.href === pathname
									? 'text-neutral-900 after:w-full'
									: 'text-neutral-500 hover:text-neutral-400 after:w-0'}
								after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full`}>
							{nav.label}
						</Link>
					))
				}
			</nav>
		</header>
	)
}