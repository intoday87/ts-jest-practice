import { describe, expect, test } from '@jest/globals'
import { romanToInt } from './roman-to-integer'

describe('test', () => {
	test('#1', () => {
		expect(romanToInt('III')).toBe(3)
	})

	test('#2', () => {
		expect(romanToInt('LVIII')).toBe(58)
	})

	test('#2', () => {
		// 1000 + 100 + 1000 + 10 + 100 + 1 + 5
		expect(romanToInt('MCMXCIV')).toBe(1994)
	})
})
