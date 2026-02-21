import About from '@/components/home/About'
import Hero from '@/components/home/Hero'
import Projects from '@/components/home/Projects'
import Transmission from '@/components/home/Transmission'

export default function Page() {
	return (
		<main className="max-w-7xl mx-auto px-6 pb-16 md:pb-24">
			<Hero />

			{/* Projects Section: The Quest Board */}
			<Projects />

			{/* About Section: About the Guild */}
			<About />

			{/* Latest Updates Section: Transmission */}
			<Transmission />
		</main >
	)
}
