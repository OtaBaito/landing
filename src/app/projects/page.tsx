import Link from 'next/link'
import Image from 'next/image'

import OhayouThumb from '@/assets/images/projects/thumbnail/ohayou.png'
import IzumiThumb from '@/assets/images/projects/thumbnail/izumi.png'

export default function Page() {
	const projects = [
		{
			slug: 'ohayou',
			name: 'The Ohayou Post',
			description: 'A community-driven news platform for anime and gaming enthusiasts.',
			thumbnail: OhayouThumb,
		},
		{
			slug: 'izumi',
			name: 'Izumi Clan',
			description: 'Cultivating a space for artists and creators to thrive and share their work.',
			thumbnail: IzumiThumb,
		},
		{
			slug: 'tomo',
			name: 'Tomodachi',
			description: 'Connecting like-minded individuals through shared hobbies and interests.',
			thumbnail: IzumiThumb,
		},
		{
			slug: 'abyte',
			name: 'aByte',
			description: 'Technical solutions and creative experiments from the OtaByte team.',
			thumbnail: IzumiThumb,
		},
	]
	return (
		<main className="max-w-7xl mx-auto px-6 pb-24">
			<div className="mb-16">
				<h1 className="text-5xl md:text-7xl font-black text-neutral-900 tracking-tight mb-4">Projects</h1>
				<p className="text-xl text-neutral-500 font-medium">Experiments, communities, and creative endeavors.</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{
					projects.map((project) => (
						<Link
							href={`/projects/${project.slug}`}
							key={project.slug}
							className="group relative h-[400px] overflow-hidden rounded-4xl bg-neutral-900 border border-neutral-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
						>
							<div className="absolute inset-0 z-10 transition-colors duration-500 bg-linear-to-b from-transparent via-neutral-900/20 to-neutral-900/90 group-hover:via-neutral-900/40 group-hover:to-neutral-900" />

							<div className="absolute bottom-0 left-0 w-full p-8 z-20 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
								<h2 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-sky-400 transition-colors">{project.name}</h2>
								<p className="text-neutral-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
									{project.description}
								</p>
							</div>

							<Image
								src={project.thumbnail}
								alt=""
								className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-60"
								fill
							/>
						</Link>
					))
				}
			</div>
		</main>
	)
}