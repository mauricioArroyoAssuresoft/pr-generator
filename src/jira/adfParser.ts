export function parseADF(adf: any): string {
  if (!adf) {
    return '';
  }

  if (adf.type === 'text') {
    return adf.text;
  }

  if (!adf.content) {
    return '';
  }

  return adf.content
    .map((child: any) => parseADF(child))
    .join('\n');
}