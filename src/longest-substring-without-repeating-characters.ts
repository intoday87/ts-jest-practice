/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLongestSubstring = function (s) {
	let maxLength = 0
	const charDic = {}
	let startIndex = 0

	while (startIndex < s.length) {
		for (let i = startIndex; i < s.length; i++) {
			const char = s[i]

			if (!charDic[char]) {
				charDic[char] = 1
				continue
			}

			if (charDic[char] > 0) {
				const currentLength = Object.keys(charDic).filter((key) => {
					return charDic[key] === 1
				}).length

				if (currentLength > maxLength) {
					maxLength = currentLength
					if (maxLength === 5) {
						console.log('update maxLength', startIndex, char, charDic)
					}
				}

				Object.keys(charDic).forEach((key) => {
					charDic[key] = undefined
				})
			}
		}

		const lastLength = Object.keys(charDic).filter((key) => {
			return charDic[key] === 1
		}).length

		maxLength = maxLength > lastLength ? maxLength : lastLength

		Object.keys(charDic).forEach((key) => {
			charDic[key] = undefined
		})

		startIndex += 1
	}

	return maxLength
}
