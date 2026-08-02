export function slugToUrl(id: string): string {
  return `/blog/${id.replace(/-/g, '')}`;
}
