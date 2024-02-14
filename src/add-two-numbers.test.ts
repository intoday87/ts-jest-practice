import { describe, test, expect } from '@jest/globals'
import { addTwoNumbers, Node } from './add-two-numbers'

describe('test addTwoNumbers', () => {
	test('#1', () => {
		const l1: Node = {
			val: 2,
			next: {
				val: 4,
				next: {
					val: 3,
					next: null,
				},
			},
		}
		const l2: Node = {
			val: 5,
			next: {
				val: 6,
				next: {
					val: 4,
					next: null,
				},
			},
		}
		expect(makeToArray(addTwoNumbers(l1, l2))).toStrictEqual([7, 0, 8])
	})

	test('#2', () => {
		const l1: Node = {
			val: 0,
			next: null,
		}
		const l2: Node = {
			val: 0,
			next: null,
		}
		expect(makeToArray(addTwoNumbers(l1, l2))).toStrictEqual([0])
	})

	test('#3', () => {
		const l1: Node = {
			val: 9,
			next: {
				val: 9,
				next: {
					val: 9,
					next: {
						val: 9,
						next: {
							val: 9,
							next: {
								val: 9,
								next: {
									val: 9,
									next: null,
								},
							},
						},
					},
				},
			},
		}
		const l2: Node = {
			val: 9,
			next: {
				val: 9,
				next: {
					val: 9,
					next: {
						val: 9,
						next: null,
					},
				},
			},
		}
		expect(makeToArray(addTwoNumbers(l1, l2))).toStrictEqual([8, 9, 9, 9, 0, 0, 0, 1])
	})

	test('#fail1', () => {
		const l1 = makeToNode([
			1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
		])
		const l2 = makeToNode([5, 6, 4])
		expect(makeToArray(addTwoNumbers(l1, l2))).toStrictEqual([
			6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
		])
	})
})

describe('test makeToNode', () => {
	test('test', () => {
		const originalArr = [
			1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
		]
		expect(makeToArray(makeToNode(originalArr))).toStrictEqual(originalArr)
	})
})

describe('test parseInt', () => {
	test('large number', () => {
		console.log(
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
				.reverse()
				.join('')
		)
		expect(parseInt('1000000000000000000000000000001')).toBe(1000000000000000000000000000001)
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

const makeToNode = (arr: number[]): Node => {
	let head: Node = null
	arr.reduce((acc: Node | null, cur: number) => {
		if (!acc) {
			head = {
				val: cur,
				next: null,
			}
			return head
		}

		const node = {
			val: cur,
			next: null,
		}
		acc.next = node
		return node
	}, null)

	return head
}
