'use client'

import Logo from '@/assets/logo/otabyte.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Component() {
	const navigation = [
		{ label: 'Home', href: '/' },
		{ label: 'Projects', href: '/projects' },
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' },
	]

	const pathname = usePathname()

	return (
		<header className="flex max-w-7xl mx-auto px-6 mt-12 mb-24 justify-between items-center relative z-50">
			<Link href="/" className="transition-transform hover:scale-105 active:scale-95 duration-200">
				<Image src={Logo} alt="OtaByte" width={110} height={60} className="w-auto h-12" />
			</Link>
			<nav className="flex space-x-8 items-center">
				{
					navigation.map((nav) => (
						<Link
							key={nav.href}
							href={nav.href}
							className={`text-sm tracking-wide font-semibold transition-all duration-300 relative py-1
								${nav.href === pathname
									? 'text-neutral-900 after:w-full'
									: 'text-neutral-500 hover:text-neutral-900 after:w-0'}
								after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full`}>
							{nav.label}
						</Link>
					))
				}
			</nav>
		</header>
	)
}