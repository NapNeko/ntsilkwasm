### Migration from ffmpegwasm

> This version is fully compatible with [ffmpegwasm/ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm) with some bug fixes.
> If feasible, it is recommended to continue to migrate to a newer version for better performance and experience.

1. Change package names and update imports:
   - `@ffmpeg/ffmpeg` => `@ntsilkwasm/main`
   - `@ffmpeg/core` & `@ffmpeg/core-mt` => `@ntsilkwasm/core-mt`
   - `@ffmpeg/core-st` => `@ntsilkwasm/core-st`
   - `@ffmpeg/types` has not been migrated, you can use the original package (which should be fully compatible)
2. Update version to `^0.12.0`
