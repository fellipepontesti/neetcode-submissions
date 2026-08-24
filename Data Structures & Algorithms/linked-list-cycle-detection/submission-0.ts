/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        let lento = head
        let rapido = head

        while (rapido !== null && rapido.next !== null) {
            lento = lento.next
            rapido = rapido.next.next

            if (rapido === lento) {
                return true
            }
        }

        return false
    }
}
