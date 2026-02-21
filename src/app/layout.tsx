import '@/assets/styles/global.css'
import { FooterComponent, HeaderComponent } from '@/components/layout'

const baseEndpoint = process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : 'https://otabyte.net'

export const metadata = {
	title: 'OtaByte',
	description: 'Made hobby into creativity',
	publisher: 'OtaByte',
	metadataBase: baseEndpoint,
	openGraph: {
		title: 'OtaByte',
		description: 'Made hobby into creativity',
		// Because OG images must have a absolute URL, we use the
		// `VERCEL_URL` environment variable to get the deployment’s URL.
		// More info:
		// https://vercel.com/docs/concepts/projects/environment-variables
		images: `${baseEndpoint}/api/otabyte`,
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<HeaderComponent />
				{children}
				<FooterComponent />
			</body>
		</html>
	)
}
