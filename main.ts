import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line patch note: the brain deletes the reason you entered a room,
// then ships a fix for a root cause nobody found.
const PATCH_NOTE =
  "v1.4.0: Fixed bug where entering a room instantly deleted the reason you went in. Root cause unknown; fix shipped anyway.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

// Gate: one line, 1-160 characters, not only whitespace.
function checkPatchNote(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("patch note must not be empty or only whitespace");
  }
  if (/[\n\r]/.test(text)) {
    throw new Error("patch note must be a single line");
  }
  if (text !== text.trim()) {
    throw new Error("patch note must not start or end with whitespace");
  }
  const length = [...text].length;
  if (length < 1 || length > 160) {
    throw new Error(`patch note is ${length} characters, outside the 1-160 range`);
  }
}

checkPatchNote(PATCH_NOTE);

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, PATCH_NOTE, "utf8");

// Read it back: what ships must be byte-identical to what was validated.
const shipped = readFileSync(outPath, "utf8");
if (shipped !== PATCH_NOTE) {
  throw new Error("written entry.txt does not match the validated patch note");
}
