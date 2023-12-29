/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'otabyte.net',
				port: '',
				pathname: '/**',
			},
		],
	},
}
