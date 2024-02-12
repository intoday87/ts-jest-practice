/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

export type Node = {
	val: number
	next: Node
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
export const removeNthFromEnd = (head: Node, n: number): Node | null => {
	let length = 0
	let node: Node = head
	while (node) {
		length = length + 1
		node = node.next
	}

	node = head
	let beforeNode: Node = null
	let numberOfCurrentNode = 0
	while (node) {
		numberOfCurrentNode += 1
		if (numberOfCurrentNode === length - (n - 1)) {
			console.log('[trace] skip', numberOfCurrentNode, length - (n - 1), head.val, node.val)
			if (beforeNode && node.next) {
				beforeNode.next = node.next
				return head
			}

			if (beforeNode && !node.next) {
				beforeNode.next = null
				return head
			}

			if (!beforeNode && node.next) {
				console.log('here', node.next.val)
				return node.next
			}

			if (head === node) {
				return null
			}

			node.next = null
		}
		beforeNode = node
		node = node.next
	}

	return head
}
