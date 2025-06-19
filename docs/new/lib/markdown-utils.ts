// Utility functions for markdown processing
export function removeFirstH1(content: string): string {
  return content.replace(/^#\s+.*$/m, '');
}

export function addTableOfContents(content: string): string {
  // Completely disabled to avoid any HTML element generation issues
  return content;
}

export function wrapSectionsInDetails(content: string): string {
  // Skip this transformation for now to avoid HTML injection issues
  return content;
}

export function highlightNumbers(content: string): string {
  // Use a simpler approach that works with markdown
  return content.replace(
    /\b(\d+(?:,\d{3})*(?:\.\d+)?)(k|m|b|%|K|M|B)?\b/g,
    '**$1$2**'
  );
}

export function processMarkdownContent(content: string): string {
  let processed = content;
  processed = removeFirstH1(processed);
  processed = addTableOfContents(processed);
  processed = highlightNumbers(processed);
  return processed;
} 