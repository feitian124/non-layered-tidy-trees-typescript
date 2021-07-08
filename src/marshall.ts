import layout from './algorithm';
import Tree from './tree';
import TreeNode from './treenode';

export default {
    convert(treeNode: TreeNode): Tree {
        let children = [];
        for (let i = 0; i < treeNode.children.length; i++) {
            children[i] = this.convert(treeNode.children[i]);
        }

        return new Tree(treeNode.width, treeNode.height, treeNode.y, children);
    },

    convertBack(converted: Tree, root: TreeNode) {
        root.x = converted.x;
        for (let i = 0; i < converted.c.length; i++) {
            this.convertBack(converted.c[i], root.children[i]);
        }
    },

    runOnConverted(root: Tree) {
        layout(root);
    },
};
