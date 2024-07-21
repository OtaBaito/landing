import Mascot from '@/assets/images/abdul/lily.jpg'
import { Scribble } from '@/components/generic'
import Image from 'next/image'

export default function Page() {
	return (
		<div className="flex max-w-7xl mx-auto">
			<div>
				<h1 className="text-8xl font-bold max-w-xl">Made<br />Hobby <div>to <span className="underline">Creativity.</span></div></h1>
				<p className="mt-8 text-4xl text-neutral-700 font-medium">
					Our passion is meant to able unlock a new world full of <span className="relative"><span className="z-20">creativity.</span><Scribble className="z-0 h-12 absolute top-[-6px] left-[-12px] text-sky-500" /></span>
				</p>
			</div>
			<Image className="h-screen object-contain" src={Mascot} alt="Lily the Mascot" />
		</div>
	)
}
