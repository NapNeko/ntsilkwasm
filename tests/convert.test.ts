import { describe } from "vitest";
import { FFmpeg } from "../packages/main/src";
import { testConvert } from "./utils";
import { testCases } from "./cases";

describe("convert with core-mt", async () => {
  const ffmpeg = await FFmpeg.create({
    core: "@ntsilkwasm/core-mt",
  });
  testCases.forEach((testCase) => testConvert(ffmpeg, testCase));
});

describe("convert with core-st", async () => {
  const ffmpeg = await FFmpeg.create({
    core: "@ntsilkwasm/core-st",
  });
  testCases.forEach((testCase) => testConvert(ffmpeg, testCase));
});
