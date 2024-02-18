/**
 * @param {string} s
 * @return {string}
 */
export const longestPalindrome = function (s: string) {
	let pd = ''
	if (s.split('').reverse().join('') === s) {
		return s
	}

	const uniqueChars = new Set([...s.split('')])

	if (uniqueChars.size === 1) {
		return s
	}

	uniqueChars.forEach((c) => {
		const allIndexes = getAllIndexes(s, c)
		for (let i = 0; i < allIndexes.length; i++) {
			for (let j = allIndexes.length - 1; j >= i; j--) {
				if (pd.length >= allIndexes[j] - allIndexes[i] + 1) {
					break
				}
				const sub = s.slice(allIndexes[i], allIndexes[j] + 1)
				if (sub === sub.split('').reverse().join('')) {
					if (sub.length > pd.length) {
						pd = sub
						break
					}
				}
			}
		}
	})

	return pd === '' ? s[0] : pd
}

const getAllIndexes = (s: string, c: string) => {
	const indexes = []
	for (let i = 0; i < s.length; i++) {
		if (s[i] === c) {
			indexes.push(i)
		}
	}
	return indexes
}
