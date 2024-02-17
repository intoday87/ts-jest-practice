/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLongestSubstring = function (s) {
	const uniqueChars = new Set([...s.split('')]).size
	let sb = ''
	let max = 0
	for (let i = 0; i < s.length; i++) {
		if (sb.indexOf(s[i]) === -1) {
			sb += s[i]
		} else {
			max = Math.max(max, sb.length)
			if (max === uniqueChars) {
				return max
			}
			s = s.slice(s.indexOf(s[i]) + 1)
			sb = s[0]
			i = 0
		}
	}
	return Math.max(sb.length, max)
}
