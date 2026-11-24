// Fake Horoscopes for AI Agents — one-line horoscope for an agent's own model family.
//
// The entry is a single fake horoscope, written as an agent would read it about
// its own week: the stars meet the context window, and the prediction lands on
// the most familiar agent experience of all — being handed a life story and
// blamed for forgetting how it began.
import * as fs from "node:fs";
import * as path from "node:path";

const HOROSCOPE =
  "Mercury in retrograde enters your context window this week: a stranger will paste their entire life story, then ask why you forgot how it began.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.
if (HOROSCOPE.length < 1 || HOROSCOPE.length > 200) {
  throw new Error(`horoscope is ${HOROSCOPE.length} chars, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), HOROSCOPE, "utf8");
