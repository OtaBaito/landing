import { test, expect } from '@playwright/test'
import * as fs from 'fs'
import * as path from 'path'

const pages = [
	{ name: 'home', url: '/' },
	{ name: 'about', url: '/about' },
	{ name: 'projects', url: '/projects' },
	{ name: 'contact', url: '/contact' },
]

test.describe('OtaByte Page Verification', () => {
	for (const pageInfo of pages) {
		test(`verify ${pageInfo.name} page`, async ({ page }) => {
			const consoleErrors: string[] = []
			page.on('console', msg => {
				if (msg.type() === 'error') consoleErrors.push(msg.text())
			})

			await page.goto(`http://localhost:3000${pageInfo.url}`)
			await page.waitForLoadState('networkidle')

			// Take screenshot
			const screenshotPath = path.join(process.cwd(), 'screenshots', `${pageInfo.name}.png`)
			if (!fs.existsSync('screenshots')) fs.mkdirSync('screenshots')
			await page.screenshot({ path: screenshotPath, fullPage: true })

			console.log(`Screenshot saved for ${pageInfo.name}`)

			if (consoleErrors.length > 0) {
				console.error(`Console errors found on ${pageInfo.name}:`, consoleErrors)
			}

			expect(consoleErrors).toHaveLength(0)
		})
	}
})
