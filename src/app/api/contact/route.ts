import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	try {
		const body = await req.json()
		const { name, email, message } = body

		if (!name || !email || !message) {
			return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
		}

		const webhookUrl = process.env.DISCORD_WEBHOOK_URL

		if (!webhookUrl) {
			console.error('Discord Webhook URL is not configured.')
			return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
		}

		const ip = req.headers.get('cf-connecting-ip') ?? (req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0].trim()

		const meta = {
			userAgent: req.headers.get('user-agent') ?? '',
			country: req.headers.get('x-vercel-ip-country') ?? '',
			city: req.headers.get('x-vercel-ip-city') ?? '',
		}

		const payload = {
			username: 'OtaByte Landing',
			avatar_url: 'https://otabyte.net/_next/image?url=%2Fimages%2Fartwork%2Fabdul%2Flily.jpg&w=1920&q=75',
			embeds: [
				{
					title: 'New Message from OtaByte Landing',
					color: 0x06b6d4,
					author: {
						name: name,
						icon_url: `https://ui-avatars.com/api/?name=${name}&background=random`,
					},
					fields: [
						{ name: 'Email', value: email, inline: true },
						{ name: 'Message', value: message },
						{ name: 'Location', value: `${meta.city}, ${meta.country}` },
					],
					footer: {
						text: `IP: ${ip || 'Unknown'} | User Agent: ${meta.userAgent?.slice(0, 40) || 'Unknown'}`,
					},
					timestamp: new Date().toISOString(),
				},
			],
		}

		const res = await fetch(webhookUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		})

		if (!res.ok) {
			throw new Error('Failed to send webhook')
		}

		return NextResponse.json({ success: true }, { status: 200 })
	} catch (error) {
		console.error('Contact form error:', error)
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
	}
}
