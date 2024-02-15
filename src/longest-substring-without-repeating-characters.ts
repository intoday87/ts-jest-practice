/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLongestSubstring = function (s) {
	let maxLength = 0
	const charDic = {}
	let startIndex = 0

	const limitLength = new Set(s.split('')).size

	while (startIndex < s.length) {
		for (let i = startIndex; i < s.length; i++) {
			const char = s[i]

			if (!charDic[char]) {
				charDic[char] = 1
				continue
			}

			const currentLength = Object.keys(charDic).filter((key) => {
				return charDic[key] === 1
			}).length

			if (currentLength > maxLength) {
				maxLength = currentLength
			}

			Object.keys(charDic).forEach((key) => {
				charDic[key] = undefined
			})

			break
		}

		const lastLength = Object.keys(charDic).filter((key) => {
			return charDic[key] === 1
		}).length

		maxLength = maxLength > lastLength ? maxLength : lastLength

		if (maxLength >= limitLength) {
			return maxLength
		}

		Object.keys(charDic).forEach((key) => {
			charDic[key] = undefined
		})

		startIndex += 1
	}

	return maxLength
}
