import Link from 'next/link'
import Image from 'next/image'

import OhayouThumb from '@/assets/images/projects/thumbnail/ohayou.png'
import IzumiThumb from '@/assets/images/projects/thumbnail/izumi.png'

export default function Page() {
	const projects = [
		{
			slug: 'ohayou',
			name: 'The Ohayou Post',
			description: 'Lorem ipsum description so long and short enough to fill this non respective content card.',
			thumbnail: OhayouThumb,
		},
		{
			slug: 'izumi',
			name: 'Izumi Clan',
			description: 'Lorem ipsum description so long and short enough to fill this non respective content card.',
			thumbnail: IzumiThumb,
		},
		{
			slug: 'tomo',
			name: 'Tomodachi',
			description: 'Lorem ipsum description so long and short enough to fill this non respective content card.',
			thumbnail: IzumiThumb,
		},
		{
			slug: 'abyte',
			name: 'aByte',
			description: 'Lorem ipsum description so long and short enough to fill this non respective content card.',
			thumbnail: IzumiThumb,
		},
	]
	return (
		<div className="mx-auto max-w-7xl grid grid-cols-6 gap-8">
			{
				projects.map((project) => (
					<Link href={`/projects/${project.slug}`} key={project.slug} className="col-span-2 relative">
						<div className="bg-gradient-to-b from-neutral-800/50 to-neutral-800/90 hover:bg-neutral-800/70 hover:shadow-md transition duration-100 ease-in-out pt-32 pb-4 px-6 relative z-10">
							<h2 className="text-white font-bold">{project.name}</h2>
							<p className="text-neutral-300">{project.description}</p>
						</div>
						<Image src={project.thumbnail} alt="" className="object-cover absolute top-0 h-full z-0" width={600} height={400} />
					</Link>
				))
			}
		</div>
	)
}