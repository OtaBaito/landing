import Image from "next/image"

export default function About() {
	return (
		<section className="max-w-7xl mx-auto px-6 py-16 md:py-24 border-t border-neutral-100">
			<div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
				<div className="flex-1 space-y-6 text-center md:text-left">
					<h2 className="font-hanson text-3xl md:text-4xl lg:text-5xl text-neutral-900 uppercase">About<br className="hidden md:block" />The Guild</h2>
					<div className="w-16 h-1 bg-cyan-400 mx-auto md:mx-0"></div>
					<p className="text-lg md:text-xl text-neutral-600 font-medium leading-relaxed">
						We are a collective of pop-culture enthusiasts, building worlds through games and virtual talents. OtaByte is more than a studio—it's a movement dedicated to turning radical hobbies into bleeding-edge creativity.
					</p>
				</div>
				<div className="flex-1 w-full max-w-md group">
					<div className="relative aspect-square rounded-full border border-neutral-200 overflow-hidden shadow-[0_10px_40px_rgba(6,182,212,0.15)] flex items-center justify-center bg-neutral-50 p-8">
						<div className="absolute inset-0 border-[16px] border-white z-20 rounded-full"></div>
						{/* Stylized placeholder illustration */}
						<Image
							src="/images/artwork/josyifa/megumin_doodle.jpg"
							alt="Artwork of Megumin"
							className="object-cover opacity-80 group-hover:opacity-100 group-hover:rotate-5 group-hover:scale-110 transition-all duration-500"
							fill
						/>
					</div>
				</div>
			</div>
		</section>
	)
}