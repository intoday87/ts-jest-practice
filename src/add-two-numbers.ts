/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export const addTwoNumbers = (l1: Node, l2: Node): Node => {
	const l1Arr = []
	const l2Arr = []

	let l1Node = l1
	let l2Node = l2

	while (l1Node) {
		l1Arr.push(l1Node.val)
		l1Node = l1Node.next
	}
	while (l2Node) {
		l2Arr.push(l2Node.val)
		l2Node = l2Node.next
	}
	const l1ReallNum = BigInt(l1Arr.reverse().join(''))
	const l2ReallNum = BigInt(l2Arr.reverse().join(''))
	const resultNum = l1ReallNum + l2ReallNum

	let head: Node = null
	resultNum
		.toString()
		.split('')
		.reverse()
		.reduce((acc: Node | null, cur): Node => {
			if (!acc) {
				head = {
					val: Number(cur),
					next: null,
				}
				return head
			}

			const node: Node = {
				val: Number(cur),
				next: null,
			}
			acc.next = node
			return node
		}, null)

	return head
}

export type Node = {
	val: number
	next: Node | null
}
