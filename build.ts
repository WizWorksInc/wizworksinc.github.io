import { Glob } from "bun";
import { dependencies } from "./package.json";

// Each bundled library asks for its license text to ship with the code.
const licenses: string[] = [];
for (const name of Object.keys(dependencies)) {
  for await (const file of new Glob("LICENSE*").scan(`node_modules/${name}`)) {
    licenses.push(`${name}\n\n${(await Bun.file(`node_modules/${name}/${file}`).text()).trim()}`);
  }
}

await Bun.build({
  entrypoints: ["src/main.ts"],
  outdir: ".",
  minify: true,
  loader: { ".glsl": "text", ".vert": "text", ".frag": "text" },
  banner: `/*!\n${licenses.join("\n\n")}\n*/`,
});
