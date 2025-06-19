// Utility functions for markdown processing
export function removeFirstH1(content: string): string {
  return content.replace(/^#\s+.*$/m, '');
}

export function addTableOfContents(content: string): string {
  const headings: Array<{ level: number; text: string; id: string }> = [];
  
  // Extract headings
  const headingRegex = /^(#{2,6})\s+(.+)$/gm;
  let match;
  
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    headings.push({ level, text, id });
  }
  
  if (headings.length === 0) return content;
  
  // Generate clean TOC markdown
  let toc = '\n## Contents\n\n';
  
  headings.forEach(({ level, text, id }) => {
    const indent = '  '.repeat(level - 2);
    toc += `${indent}- [${text}](#${id})\n`;
  });
  
  toc += '\n---\n\n';
  
  // Add IDs to headings and insert TOC after first paragraph
  let result = content;
  
  // Add IDs to headings using standard markdown syntax
  result = result.replace(/^(#{2,6})\s+(.+)$/gm, (match, hashes, text) => {
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return `${hashes} ${text} {#${id}}`;
  });
  
  // Insert TOC after first paragraph or at the beginning
  const firstParagraphEnd = result.search(/\n\n/);
  if (firstParagraphEnd !== -1) {
    result = result.slice(0, firstParagraphEnd + 2) + toc + result.slice(firstParagraphEnd + 2);
  } else {
    result = toc + result;
  }
  
  return result;
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