/**
 * @param {string} s
 * @return {number}
 */
const regExp = /^(\s+)?[+-]?[0-9]+/
export const myAtoi = function (s) {
	const result = s.match(regExp)?.[0]
	console.log(result)

	if (!result) {
		return 0
	}

	const parsed = parseInt(result)

	if (Number.isNaN(parsed)) {
		return 0
	}

	if (parsed > 0 && parsed > 0x7fffffff) {
		return 2147483647
	}

	if (parsed < 0 && parsed * -1 > 0x7fffffff) {
		return -2147483648
	}

	return parsed
}
