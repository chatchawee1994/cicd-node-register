import { isValidEmail } from '../../src/utils/validator.js'

test("valid email", () => {
    expect(isValidEmail("test@email.com")).toBe(true)
})

test("invalid email", () => {
    expect(isValidEmail("bad-email")).toBe(false)
})