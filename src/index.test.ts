import { describe, expect, test } from "@jest/globals"
import { plus } from "./index"

describe("test plus", () => {
	test("test", () => {
		expect(plus(1, 2)).toEqual(3)
	})
})
