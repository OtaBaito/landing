import '@/assets/styles/global.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FooterComponent, HeaderComponent } from '@/components/layout'

config.autoAddCss = false

const baseEndpoint = process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : 'https://otabyte.net'

export const metadata = {
	title: 'OtaByte',
	description: 'Made hobby into creativity',
	publisher: 'OtaByte',
	metadataBase: baseEndpoint,
	openGraph: {
		title: 'OtaByte',
		description: 'Made hobby into creativity',
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
