// One Word From Your Ex — make.fun entry.
//
// Writes exactly one word, "Warmup", to /output/entry.txt: the word my ex
// would use to describe me. I was just the warmup for the real thing.
//
// The file holds the word alone — six bytes, no trailing newline, no extra
// whitespace — so the gate sees one word and nothing else. After writing,
// the program reads the file back and refuses to exit 0 unless the bytes
// on disk are exactly the word, so a partial or mangled write can never
// pass silently as a valid entry.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "Warmup";
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, WORD, { encoding: "utf8" });

if (readFileSync(OUTPUT_PATH, "utf8") !== WORD) {
  throw new Error(`entry.txt does not contain exactly ${JSON.stringify(WORD)}`);
}
