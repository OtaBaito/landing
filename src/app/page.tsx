import Mascot from '@/assets/images/josyifa/lily_sketch.jpeg'
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

export function Scribble({ className }: { className?: string | undefined }) {
	return (
		<svg className={className} fill="currentColor" viewBox="0 0 156 40" preserveAspectRatio="none" aria-hidden="true"><path d="M77.867,1.875l-59.314,13.4C13.5,16.418,8.184,17.689,4.406,21.139c-1.421,1.3-2.631,3.081-2.37,4.956A5.586,5.586,0,0,0,3.49,28.908c2.143,2.449,5.293,3.852,8.445,4.847A73.518,73.518,0,0,0,27.41,36.55c8.793.8,17.637.89,26.469.975q20.22.2,40.44.378a179.741,179.741,0,0,0,21.225-.657c7.9-.87,15.638-2.778,23.345-4.681,3.058-.755,6.19-1.542,8.785-3.282s4.584-4.66,4.261-7.7c-.5-4.659-5.718-7.245-10.311-8.717C117.7,5.2,92.044,4.657,66.842,4.365,54.984,4.228,43.011,4.14,31.413,6.534" fill="none" stroke="currentColor" stroke-miterlimit="10"></path></svg>
	)
}