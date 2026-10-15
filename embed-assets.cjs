const fs = require('fs')
const path = require('path')

const htmlFile = path.join(__dirname, 'public', 'media-kit-deck.html')
let html = fs.readFileSync(htmlFile, 'utf8')

function toBase64(relPath, mime) {
  const fullPath = path.join(__dirname, 'public', relPath)
  if (fs.existsSync(fullPath)) {
    const data = fs.readFileSync(fullPath).toString('base64')
    return `data:${mime};base64,${data}`
  }
  console.warn('File not found:', fullPath)
  return relPath
}

const replacements = [
  { from: 'src="putri-profile.jpg"', to: `src="${toBase64('putri-profile.jpg', 'image/jpeg')}"` },
  { from: 'src="thumbnails/garnier-peeling.jpg"', to: `src="${toBase64('thumbnails/garnier-peeling.jpg', 'image/jpeg')}"` },
  { from: 'src="thumbnails/socks-baby.jpg"', to: `src="${toBase64('thumbnails/socks-baby.jpg', 'image/jpeg')}"` },
  { from: 'src="thumbnails/toy-baby.jpg"', to: `src="${toBase64('thumbnails/toy-baby.jpg', 'image/jpeg')}"` },
  { from: 'src="logos/garnier.svg"', to: `src="${toBase64('logos/garnier.svg', 'image/svg+xml')}"` },
  { from: 'src="logos/vaseline.svg"', to: `src="${toBase64('logos/vaseline.svg', 'image/svg+xml')}"` },
  { from: 'src="logos/sidomuncul.svg"', to: `src="${toBase64('logos/sidomuncul.svg', 'image/svg+xml')}"` },
  { from: 'src="logos/hanasui.png"', to: `src="${toBase64('logos/hanasui.png', 'image/png')}"` },
  { from: 'src="logos/motherlove.png"', to: `src="${toBase64('logos/motherlove.png', 'image/png')}"` },
  { from: 'src="logos/you.png"', to: `src="${toBase64('logos/you.png', 'image/png')}"` },
  { from: 'src="logos/reglow.png"', to: `src="${toBase64('logos/reglow.png', 'image/png')}"` },
  { from: 'src="logos/blackmores.svg"', to: `src="${toBase64('logos/blackmores.svg', 'image/svg+xml')}"` },
  { from: 'src="logos/salsa.png"', to: `src="${toBase64('logos/salsa.png', 'image/png')}"` },
  { from: 'src="logos/cedea.png"', to: `src="${toBase64('logos/cedea.png', 'image/png')}"` },
  { from: 'src="logos/pln.svg"', to: `src="${toBase64('logos/pln.svg', 'image/svg+xml')}"` },
  { from: 'src="logos/yayle.svg"', to: `src="${toBase64('logos/yayle.svg', 'image/svg+xml')}"` },
  { from: 'src="testimonials/client-dina.jpg"', to: `src="${toBase64('testimonials/client-dina.jpg', 'image/jpeg')}"` },
  { from: 'src="testimonials/client-siti.jpg"', to: `src="${toBase64('testimonials/client-siti.jpg', 'image/jpeg')}"` },
  { from: 'src="testimonials/client-bima.jpg"', to: `src="${toBase64('testimonials/client-bima.jpg', 'image/jpeg')}"` },
]

for (const r of replacements) {
  html = html.replace(r.from, r.to)
}

const outFile = path.join(__dirname, 'public', 'media-kit-standalone.html')
fs.writeFileSync(outFile, html, 'utf8')
console.log('Successfully created standalone HTML. File size:', fs.statSync(outFile).size, 'bytes')
