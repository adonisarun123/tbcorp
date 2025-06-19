import { Plugin } from 'unified';
import { visit } from 'unist-util-visit';

const plugin: Plugin = () => (tree) => {
  let removed = false;
  visit(tree, 'heading', (node, index, parent) => {
    if (!removed && (node as any).depth === 1 && parent && typeof index === 'number') {
      parent.children.splice(index, 1);
      removed = true;
      return [visit.EXIT];
    }
  });
};

export default plugin; 