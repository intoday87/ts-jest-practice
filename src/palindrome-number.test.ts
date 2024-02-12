import { describe, expect, test } from '@jest/globals'
import { isPalindrome } from './palindrome-number'

describe('test isPalindrome', () => {
	test('#1', () => {
		expect(isPalindrome(121)).toBe(true)
	})

	test('#2', () => {
		expect(isPalindrome(-121)).toBe(false)
	})

	test('#2', () => {
		expect(isPalindrome(10)).toBe(false)
	})
})
