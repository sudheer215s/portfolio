// Turns the pdftoppm render into the file the resume page serves.
// Lossless WebP keeps the text sharp and is much smaller than the raw PNG.
import { stat, unlink } from "node:fs/promises";
import sharp from "sharp";

const input = process.argv[2];
const output = process.argv[3];

if (!input || !output) {
  console.error("usage: node scripts/optimize-resume-preview.mjs <render.png> <resume.webp>");
  process.exit(1);
}

const rendered = sharp(input);
const meta = await rendered.metadata();
await rendered.webp({ lossless: true, effort: 6 }).toFile(output);
await unlink(input);

const file = await stat(output);
console.log(
  `Wrote ${output} ${meta.width}x${meta.height} (${file.size} bytes)`
);
