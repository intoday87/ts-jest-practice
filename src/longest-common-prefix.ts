/**
 * @param {string[]} strs
 * @return {string}
 */
export const longestCommonPrefix = (strs: string[]): string => {
	const minLength = Math.min(...strs.map((str) => str.length))
	let prefix = ''

	for (let i = 0; i < minLength; i++) {
		const char = strs[0][i]
		if (strs.every((str) => str[i] === char)) {
			prefix += char
		} else {
			break
		}
	}

	return prefix
}
