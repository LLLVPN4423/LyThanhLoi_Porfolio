/**
 * Sync slim Mythos 3D build into public/3d (allowlisted GLBs only).
 * Usage: node scripts/sync-mythos-3d.mjs [sourceDir]
 */
import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(import.meta.dirname, "..");
const srcRoot =
  process.argv[2] ||
  path.resolve("D:/repos/lythanhloi porfolio 3d/ver3/ltl-portfolio-final");
const dstRoot = path.join(repoRoot, "public", "3d");

const glbs = [
  "mythos/models/planet/planet_terrain_v2.glb",
  "mythos/models/planet/planet_ridge_v2.glb",
  "mythos/models/planet/planet_cliff_v2.glb",
  "mythos/models/planet/planet_ruin_v2.glb",
  "mythos/models/planet/planet_flora_field_v2.glb",
  "mythos/models/planet/planet_crash_collar_v2.glb",
  "mythos/models/airlock_assembly_v3.glb",
  "mythos/models/opt/hull_module_left_v2_opt.glb",
  "mythos/models/opt/hull_module_right_v2_opt.glb",
  "mythos/models/opt/wreck_silhouette_v2_opt.glb",
  "mythos/models/corridor_segment_A_v3.glb",
  "mythos/models/corridor_segment_B_v3.glb",
  "mythos/models/interior_prop_kit_v3.glb",
  "mythos/models/bridge_shell_v3.glb",
  "mythos/models/console_bank_v3.glb",
  "mythos/models/opt/capsule_hero_v3_opt.glb",
  "mythos/models/project_cabinet_v3.glb",
  "mythos/models/nexus_portal_v3.glb",
];

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function copyFile(from, to) {
  ensureDir(path.dirname(to));
  fs.copyFileSync(from, to);
}

if (!fs.existsSync(srcRoot)) {
  console.error("Source not found:", srcRoot);
  process.exit(1);
}

ensureDir(dstRoot);
copyFile(path.join(srcRoot, "index-mythos.html"), path.join(dstRoot, "index.html"));

let html = fs.readFileSync(path.join(dstRoot, "index.html"), "utf8");
if (!html.includes("['2D Portfolio','/']")) {
  html = html.replace(
    "['Facebook','https://www.facebook.com/ly.loi.235603']],",
    "['Facebook','https://www.facebook.com/ly.loi.235603'],['2D Portfolio','/']],"
  );
}
if (!html.includes("← 2D Portfolio")) {
  html = html.replace(
    "</div></div>\n<script>",
    '</div><p style="margin-top:18px"><a href="/" style="color:var(--c)">← 2D Portfolio</a></p></div>\n<script>'
  );
  // boot closes before script — try boot-specific replace
  html = html.replace(
    '<div><button id="b1" disabled>▶ Enter ship (audio)</button><button id="b2" disabled>Silent</button></div></div>',
    '<div><button id="b1" disabled>▶ Enter ship (audio)</button><button id="b2" disabled>Silent</button></div><p style="margin-top:18px"><a href="/" style="color:var(--c)">← 2D Portfolio</a></p></div>'
  );
}
fs.writeFileSync(path.join(dstRoot, "index.html"), html);

let ok = 0;
for (const rel of glbs) {
  const from = path.join(srcRoot, "assets", rel);
  const to = path.join(dstRoot, "assets", rel);
  if (!fs.existsSync(from)) {
    console.warn("MISSING", rel);
    continue;
  }
  copyFile(from, to);
  ok++;
}
console.log(`Synced HTML + ${ok}/${glbs.length} GLBs → public/3d`);
