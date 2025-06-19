import { Plugin } from 'unified';
import { visit } from 'unist-util-visit';
import type { Text } from 'mdast';

const plugin: Plugin = () => (tree) => {
  visit(tree, 'text', (node: Text) => {
    if (!node.value) return;
    const regex = /\b(\d+[\d,\.]*)(%|[mkb]?)\b/gi;
    if (regex.test(node.value)) {
      const parts: any[] = [];
      let lastIndex = 0;
      node.value.replace(regex, (match, p1, p2, offset) => {
        if (offset > lastIndex) {
          parts.push({ type: 'text', value: node.value.slice(lastIndex, offset) });
        }
        parts.push({
          type: 'element',
          tagName: 'span',
          properties: {
            className: ['number-highlight', 'inline-block', 'px-1', 'bg-yellow-300', 'dark:bg-yellow-600', 'rounded'],
          },
          children: [{ type: 'text', value: match }],
        });
        lastIndex = offset + match.length;
        return match;
      });
      if (lastIndex < node.value.length) {
        parts.push({ type: 'text', value: node.value.slice(lastIndex) });
      }
      // Replace the node with new nodes array
      if (parts.length) {
        (node as any).type = 'element';
        (node as any).tagName = 'span';
        (node as any).children = parts;
        delete (node as any).value;
      }
    }
  });
};

export default plugin; 