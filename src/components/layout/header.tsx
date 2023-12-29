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
		<header className="flex max-w-7xl mx-auto mt-8 mb-16 justify-between">
			<Image src={Logo} alt="OtaByte" width={92.8} height={50} />
			<div className="flex space-x-4 items-center text-md">
				{
					navigation.map((nav) => (
						<Link
							key={nav.href}
							href={nav.href}
							className={`font-medium text-neutral-600 ${nav.href === pathname ? 'underline decoration-2' : 'hover:text-sky-600'}`}>
							{nav.label}
						</Link>
					))
				}
			</div>
		</header>
	)
}