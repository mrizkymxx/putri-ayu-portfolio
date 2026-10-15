const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const templatePath = path.join(__dirname, 'public', 'media-kit-template.html')
let html = fs.readFileSync(templatePath, 'utf8')

function toBase64(relPath, mime) {
  const fullPath = path.join(__dirname, 'public', relPath)
  if (fs.existsSync(fullPath)) {
    const data = fs.readFileSync(fullPath).toString('base64')
    return `data:${mime};base64,${data}`
  }
  return relPath
}

html = html.replace('src="putri-profile.jpg"', `src="${toBase64('putri-profile.jpg', 'image/jpeg')}"`)
html = html.replace('src="thumbnails/garnier-peeling.jpg"', `src="${toBase64('thumbnails/garnier-peeling.jpg', 'image/jpeg')}"`)
html = html.replace('src="thumbnails/socks-baby.jpg"', `src="${toBase64('thumbnails/socks-baby.jpg', 'image/jpeg')}"`)
html = html.replace('src="thumbnails/toy-baby.jpg"', `src="${toBase64('thumbnails/toy-baby.jpg', 'image/jpeg')}"`)
html = html.replace('src="logos/garnier.svg"', `src="${toBase64('logos/garnier.svg', 'image/svg+xml')}"`)
html = html.replace('src="logos/vaseline.svg"', `src="${toBase64('logos/vaseline.svg', 'image/svg+xml')}"`)
html = html.replace('src="logos/sidomuncul.svg"', `src="${toBase64('logos/sidomuncul.svg', 'image/svg+xml')}"`)
html = html.replace('src="logos/hanasui.png"', `src="${toBase64('logos/hanasui.png', 'image/png')}"`)
html = html.replace('src="logos/motherlove.png"', `src="${toBase64('logos/motherlove.png', 'image/png')}"`)
html = html.replace('src="logos/you.png"', `src="${toBase64('logos/you.png', 'image/png')}"`)

const onePageHtml = path.join(__dirname, 'public', 'media-kit-1page.html')
fs.writeFileSync(onePageHtml, html, 'utf8')

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const htmlUrl = 'file:///' + path.resolve('public/media-kit-1page.html').replace(/\\/g, '/')
const pdfPublic = path.resolve('public/media-kit.pdf')
const pdfDist = path.resolve('dist/media-kit.pdf')

execSync(`"${chromePath}" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPublic}" "${htmlUrl}"`)

if (!fs.existsSync(path.resolve('dist'))) {
  fs.mkdirSync(path.resolve('dist'), { recursive: true })
}
fs.copyFileSync(pdfPublic, pdfDist)

const size = fs.statSync(pdfPublic).size
console.log('1-page media-kit.pdf successfully generated. Size:', size, 'bytes')

// Verify page count
const buf = fs.readFileSync(pdfPublic)
const matches = buf.toString('latin1').match(/\/Type\s*\/Page\b/g)
console.log('Page count:', matches ? matches.length : 'unknown')
