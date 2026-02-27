'use client'

import Logo from '@/assets/logo/otabyte.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useState } from 'react'

export default function Component() {
	const [isOpen, setIsOpen] = useState(false)

	const navigation = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Projects', href: '/projects' },
		{ label: 'Merch', href: '/merch' },
		{ label: 'Contact', href: '/contact' },
	]

	const pathname = usePathname()

	return (
		<header className="flex flex-col lg:flex-row max-w-7xl mx-auto px-6 mt-6 sm:mt-8 lg:mt-12 mb-10 lg:mb-24 justify-between relative z-50">
			<div className="flex items-center justify-between w-full lg:w-auto">
				<Link href="/" className="flex items-center gap-4">
					<Image src={Logo} alt="OtaByte" width={110} height={60} className="w-auto h-6 lg:h-7" />
					<span className="font-hanson text-2xl lg:text-3xl font-bold text-neutral-900 uppercase">OtaByte</span>
				</Link>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="lg:hidden p-2 text-neutral-600 hover:text-cyan-500 transition-colors"
					aria-label="Toggle Menu"
				>
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						{isOpen ? (
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						) : (
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						)}
					</svg>
				</button>
			</div>

			<nav className={`lg:flex flex-col lg:flex-row gap-6 lg:gap-8 items-center mt-6 lg:mt-0 ${isOpen ? 'flex' : 'hidden'}`}>
				{
					navigation.map((nav) => (
						<Link
							key={nav.href}
							href={nav.href}
							onClick={() => setIsOpen(false)}
							className={`font-bold uppercase text-sm tracking-widest transition-all duration-300 relative py-1
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