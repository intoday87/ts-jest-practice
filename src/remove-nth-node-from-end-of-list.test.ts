import { describe, expect, test } from '@jest/globals'
import { removeNthFromEnd, Node } from './remove-nth-node-from-end-of-list'

describe('removeNthFromEnd', () => {
	test('#1', () => {
		const head: Node = {
			val: 1,
			next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } },
		}
		expect(makeToArray(removeNthFromEnd(head, 2))).toStrictEqual([1, 2, 3, 5])
	})
	test('#2', () => {
		expect(makeToArray(removeNthFromEnd({ val: 1, next: null }, 1))).toStrictEqual([])
	})
	test('#3', () => {
		expect(makeToArray(removeNthFromEnd({ val: 1, next: { val: 2, next: null } }, 1))).toStrictEqual([1])
	})
	test('#4', () => {
		expect(makeToArray(removeNthFromEnd({ val: 1, next: { val: 2, next: null } }, 2))).toStrictEqual([2])
	})
})

const makeToArray = (head: Node): number[] => {
	const result = []
	let node = head
	while (node) {
		result.push(node.val)
		node = node.next
	}
	return result
}
