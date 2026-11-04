import fs from "node:fs";
import path from "node:path";

const DIR = path.join(process.cwd(), "content/case-studies");

/** Returns the raw MDX source for a slug, or null if no case study is written yet. */
export function getCaseStudySource(slug: string): string | null {
  const file = path.join(DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  return fs.readFileSync(file, "utf8");
}

export type CaseStudyFrontmatter = {
  title: string;
  category: string;
  summary: string;
  role?: string;
  timeline?: string;
  team?: string;
  tools?: string;
};
