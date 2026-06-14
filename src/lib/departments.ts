export interface Department {
  slug: string;
  label: string;
  dekStrong: string;
  dek: string;
}

/**
 * Canonical list of journal departments.
 *
 * Imported by:
 *   - src/pages/blog/category/[category].astro (getStaticPaths + render)
 *   - src/components/Sidebar.astro (department list with post counts)
 *   - src/components/Header.astro (top nav) — keep nav order in sync
 *
 * Add a department here; the category page and sidebar pick it up automatically.
 * (Header.astro still hardcodes its nav order — update that file too.)
 */
export const departments: Department[] = [
  {
    slug: 'leadership',
    label: 'Leadership',
    dekStrong: 'On leading engineers.',
    dek: 'Building teams that grow. Shielding well, exposing wisely, and the practical craft of running an engineering org.',
  },
  {
    slug: 'best-practices',
    label: 'Best Practices',
    dekStrong: 'On the craft of the work.',
    dek: 'Habits, frameworks, and small acts of engineering discipline that compound across a career.',
  },
  {
    slug: 'career',
    label: 'Career',
    dekStrong: 'On the jumps that aren’t easy.',
    dek: 'Honest accounts of the senior-to-staff transition, the IC-to-manager pivot, and the moves that make a career.',
  },
  {
    slug: 'ai',
    label: 'AI',
    dekStrong: 'On what AI changes, and what it doesn’t.',
    dek: 'Activity-by-activity analysis of where AI replaces engineering work, where it amplifies it, and which skills now matter most.',
  },
];
