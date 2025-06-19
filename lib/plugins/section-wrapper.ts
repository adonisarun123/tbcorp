import { Plugin } from 'unified';
import { visit } from 'unist-util-visit';
import { Node } from 'unist';
import type { Parent } from 'unist';

// Wrap each level-2 heading (##) and its following siblings until the next level-2/level-1 heading inside
// a <details> element so that sections can be collapsed. The heading text becomes the <summary>.

const plugin: Plugin = () => (tree: Node) => {
  const newChildren: Node[] = [];
  let i = 0;

  const children = (tree as Parent).children;

  while (i < children.length) {
    const node = children[i];

    if (node.type === 'heading' && (node as any).depth === 2) {
      // Collect section nodes until next heading depth 1 or 2 (but not including it)
      const sectionNodes: Node[] = [];
      i++; // move past the heading
      while (
        i < children.length &&
        !(children[i].type === 'heading' && ((children[i] as any).depth === 1 || (children[i] as any).depth === 2))
      ) {
        sectionNodes.push(children[i]);
        i++;
      }

      // Build details node
      const details: any = {
        type: 'element',
        tagName: 'details',
        properties: { className: ['collapse-section', 'my-6'] },
        children: [
          {
            type: 'element',
            tagName: 'summary',
            properties: { className: ['cursor-pointer', 'font-semibold', 'text-xl'] },
            children: (node as any).children,
          },
          ...sectionNodes,
        ],
      };
      newChildren.push(details);
      continue;
    }

    // else push node as-is and advance
    newChildren.push(node);
    i++;
  }

  (tree as Parent).children = newChildren;
};

export default plugin; 