import { copyFile, mkdir, readdir, rm } from 'node:fs/promises'
import path from 'node:path'

const rootDir = process.cwd()
const tempDir = path.join(rootDir, '.build-temp')
const assetsDir = path.join(tempDir, 'assets')
const jsTarget = path.join(rootDir, 'js', 'index.js')
const cssTarget = path.join(rootDir, 'css', 'index.css')
const jsAssetDir = path.join(rootDir, 'js')
const htmlEntry = path.join(tempDir, 'build-entry.html')

const assetFiles = await readdir(assetsDir)
const jsAsset =
  assetFiles.find((file) => /^build-entry-.*\.js$/.test(file)) ??
  assetFiles.find((file) => /^index-.*\.js$/.test(file))
const cssAsset =
  assetFiles.find((file) => /^build-entry-.*\.css$/.test(file)) ??
  assetFiles.find((file) => /^index-.*\.css$/.test(file))

if (!jsAsset || !cssAsset) {
  throw new Error('Expected built index assets were not found in .build-temp/assets.')
}

await mkdir(path.dirname(jsTarget), { recursive: true })
await mkdir(path.dirname(cssTarget), { recursive: true })
await mkdir(jsAssetDir, { recursive: true })

await copyFile(path.join(assetsDir, jsAsset), jsTarget)
await copyFile(path.join(assetsDir, cssAsset), cssTarget)

const staticAssets = assetFiles.filter(
  (file) => file !== jsAsset && file !== cssAsset,
)

for (const asset of staticAssets) {
  await copyFile(path.join(assetsDir, asset), path.join(jsAssetDir, asset))
}

await rm(htmlEntry, { force: true })
await rm(tempDir, { recursive: true, force: true })
