import { describe, expect, test } from '@jest/globals'
import { longestCommonPrefix } from './longest-common-prefix'

describe('test', () => {
	test('#1', () => {
		expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')
	})
})
