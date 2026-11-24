import { mkdirSync, writeFileSync } from "node:fs";

// Deadpan appliance voice, one line: the bread escaped its fate by climbing the corporate ladder.
const ENTRY =
  "ERROR: Cannot toast. The bread has been promoted to management.";

// Gate check: the entry must be 1-120 characters and not only whitespace.
if (!ENTRY.trim() || ENTRY.length > 120) {
  throw new Error("entry must be 1-120 non-blank characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
