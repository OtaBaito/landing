'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function MerchPage() {
	const [currency, setCurrency] = useState<'USD' | 'IDR'>('USD')

	const products = [
		{
			id: 1,
			name: 'OtaByte "Nexus" Bomber Jacket',
			category: 'Outerwear',
			priceUsd: 120,
			priceIdr: 1800000,
			status: 'available'
		},
		{
			id: 2,
			name: 'Astra Nyx Acrylic Standee',
			category: 'Collectibles',
			priceUsd: 25,
			priceIdr: 375000,
			status: 'new'
		},
		{
			id: 3,
			name: 'Guild Logo Heavyweight Tee',
			category: 'Apparel',
			priceUsd: 35,
			priceIdr: 525000,
			status: 'available'
		},
		{
			id: 4,
			name: 'Project: Astral Frame Desk Mat',
			category: 'Accessories',
			priceUsd: 40,
			priceIdr: 600000,
			status: 'sold_out'
		}
	]

	const formatPrice = (usd: number, idr: number) => {
		if (currency === 'USD') {
			return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(usd)
		} else {
			return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(idr)
		}
	}

	return (
		<main className="w-full bg-white pb-32">
			{/* Merch Header */}
			<section className="max-w-7xl mx-auto px-6 pt-12 pb-16 text-center border-b border-neutral-100 flex flex-col items-center">
				<div className="inline-block px-4 py-1.5 rounded-full border border-neutral-300 text-neutral-500 font-bold text-sm tracking-widest uppercase mb-4">
					Loot Drop
				</div>
				<h1 className="font-hanson text-6xl md:text-7xl lg:text-8xl tracking-tight text-neutral-900 uppercase drop-shadow-sm">
					Official Merch
				</h1>
				<p className="text-xl text-neutral-600 font-medium leading-relaxed max-w-2xl mx-auto mt-6">
					Wear the nexus. Shop exclusive, ultra-high-quality apparel and accessories straight from the guild.
				</p>
			</section>

			{/* Products Grid */}
			<section className="max-w-7xl mx-auto px-6 py-16">

				{/* Currency Toggle */}
				<div className="flex justify-end mb-8 relative z-30">
					<div className="inline-flex bg-neutral-100 border border-neutral-200 rounded-full p-1 shadow-inner relative">
						<button
							onClick={() => setCurrency('USD')}
							className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold tracking-widest transition-colors duration-300 ${currency === 'USD' ? 'text-white' : 'text-neutral-500 hover:text-neutral-900'}`}
						>
							USD
						</button>
						<button
							onClick={() => setCurrency('IDR')}
							className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold tracking-widest transition-colors duration-300 ${currency === 'IDR' ? 'text-white' : 'text-neutral-500 hover:text-neutral-900'}`}
						>
							IDR
						</button>
						{/* Active Background Pill */}
						<div className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all duration-300 ease-out z-0 ${currency === 'USD' ? 'translate-x-0 left-1' : 'translate-x-[calc(100%+6px)] left-1'}`}></div>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
					{products.map((product) => (
						<div key={product.id} className="group flex flex-col cursor-pointer">
							<div className="aspect-[4/5] bg-neutral-100 rounded-2xl overflow-hidden relative mb-4 border border-neutral-200">
								{product.status === 'new' && (
									<div className="absolute inset-x-0 top-0 p-4 z-20 flex justify-end">
										<div className="bg-cyan-500 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">New</div>
									</div>
								)}
								{product.status === 'sold_out' && (
									<div className="absolute inset-x-0 top-0 p-4 z-20 flex justify-end">
										<div className="bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">Sold Out</div>
									</div>
								)}

								<div className="absolute inset-0 bg-neutral-200/50 group-hover:bg-transparent transition-colors z-10"></div>
								<div className="absolute inset-0 flex items-center justify-center opacity-30">
									<svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
										<path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
									</svg>
								</div>

								<div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
									{product.status === 'sold_out' ? (
										<div className="flex items-center justify-center w-full py-3 bg-neutral-400 text-white font-bold uppercase tracking-widest text-sm rounded-lg cursor-not-allowed shadow-lg">
											Out of Stock
										</div>
									) : (
										<div className="flex items-center justify-center w-full py-3 bg-neutral-900 text-white font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-neutral-800 active:scale-95 transition-transform shadow-lg">
											Purchase Now
										</div>
									)}
								</div>
							</div>
							<div className={`flex flex-col ${product.status === 'sold_out' ? 'opacity-60' : ''}`}>
								<h3 className="font-bold text-lg text-neutral-900 line-clamp-1">{product.name}</h3>
								<p className="text-neutral-500 text-sm mb-1">{product.category}</p>
								<div className="font-bold text-lg text-neutral-900 transition-opacity duration-300">
									{formatPrice(product.priceUsd, product.priceIdr)}
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	)
}
