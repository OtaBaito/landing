import { ImageResponse } from '@vercel/og'

export const config = {
	runtime: 'edge',
}

// const font = fetch(new URL('@/assets/fonts/Inter-Bold.ttf', import.meta.url)).then(
// 	(res) => res.arrayBuffer()
// )
const font = fetch(new URL('@/assets/fonts/TYPEWR__.TTF', import.meta.url)).then(
	(res) => res.arrayBuffer()
)

export default async function handler() {
	const fontData = await font

	return new ImageResponse(
		(
			<div
				style={{
					backgroundColor: '#fff',
					backgroundImage:
						'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
					backgroundSize: '100px 100px',
					height: '100%',
					width: '100%',
					textAlign: 'center',
					alignContent: 'center',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					display: 'flex',
				}}
			>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					alt="OtaByte"
					width={232}
					height={125}
					src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMyIiBoZWlnaHQ9IjEyNSIgdmlld0JveD0iMCAwIDIzMiAxMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMTYgNjIuNUw0OS4zMzMzIDE5QzQ5LjMzMzMgMTkgMTYgMzguNDc1NiAxNiA2Mi41QzE2IDg2LjUyNDQgNDkuMzMzMyAxMDYgNDkuMzMzMyAxMDZMMTE2IDYyLjVaTTExNiA2Mi41TDE4Mi42NjcgMTlDMTgyLjY2NyAxOSAyMTYgMzguNDc1NiAyMTYgNjIuNUMyMTYgODYuNTI0NCAxODIuNjY3IDEwNiAxODIuNjY3IDEwNkwxMTYgNjIuNVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMzIiLz4KPC9zdmc+Cg=="
					style={{ margin: '0 25px' }}
				/>
				<div
					style={{
						fontSize: 60,
						marginTop: 25,
						fontFamily: 'Inter',
						fontWeight: 'normal',
						lineHeight: 1.8,
					}}
				>
					OtaByte
				</div>
			</div>
		),
		{
			width: 1200,
			height: 600,
			fonts: [
				{
					name: 'Inter',
					data: fontData,
					weight: 700,
					style: 'normal',
				},
			],
		}
	)
}
