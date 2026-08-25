/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
        if (!root) {
            return root
        }

        const fila: TreeNode[] = [root]

        while(fila.length > 0) {
            const atual = fila.shift()

            const aux = atual.left
            atual.left = atual.right
            atual.right = aux

            if (atual.left) {
                fila.push(atual.left)
            }

            if (atual.right) {
                fila.push(atual.right)
            }
        }
        
        return root
    }

}
