// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

export const romanToInt = (s: string): number => {
	return s.split('').reduce((acc, cur, i, arr) => {
		if (cur === 'V' && arr[i - 1] === 'I') {
			return acc + 3
		}

		if (cur === 'X' && arr[i - 1] === 'I') {
			return acc + 8
		}

		if (cur === 'L' && arr[i - 1] === 'X') {
			return acc + 30
		}

		if (cur === 'C' && arr[i - 1] === 'X') {
			return acc + 80
		}

		if (cur === 'D' && arr[i - 1] === 'C') {
			return acc + 300
		}

		if (cur === 'M' && arr[i - 1] === 'C') {
			return acc + 800
		}
		switch (cur) {
			case 'I':
				return acc + 1
			case 'V':
				return acc + 5
			case 'X':
				return acc + 10
			case 'L':
				return acc + 50
			case 'C':
				return acc + 100
			case 'D':
				return acc + 500
			case 'M':
				return acc + 1000
			default:
				return acc
		}
	}, 0)
}
