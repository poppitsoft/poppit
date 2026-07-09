import { spawnSync } from "node:child_process";
import { join } from "node:path";

const isWindows = process.platform === "win32";

const tsc = isWindows
  ? join("node_modules", ".bin", "tsc.cmd")
  : join(".", "node_modules", ".bin", "tsc");

console.log("==================================");
console.log("Poppit Build Started");
console.log("==================================");

const result = spawnSync(
  tsc,
  ["-p", "apps/server/tsconfig.json"],
  {
    stdio: "inherit",
  }
);

if (result.status !== 0) {
  process.exit(result.status);
}

console.log("==================================");
console.log("Poppit Build Finished");
console.log("==================================");
console.log(`🚀 Server running on port ${PORT}`);