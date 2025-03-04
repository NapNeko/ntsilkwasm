import { readFile, writeFile } from "fs/promises";
import { FFmpeg } from "../../src";
import { join } from "path";
import { assetsDir, outDir } from "./utils.mjs";

const ffmpeg = await FFmpeg.create({
  core: "@ntsilkwasm/core-mt",
  log: true,
});

ffmpeg.fs.writeFile("flame.avi", await readFile(join(assetsDir, "flame.avi")));

await ffmpeg.run(
  "-i",
  "flame.avi",
  "-i",
  "flame.avi",
  "-filter_complex",
  "hstack",
  "flame.mp4"
);

await writeFile(join(outDir, "flame.mp4"), ffmpeg.fs.readFile("flame.mp4"));

ffmpeg.exit();
process.exit(0);
