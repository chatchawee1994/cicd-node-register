import { register } from "../../src/services/auth.service.js"
import * as userStore from "../../src/data/user.store.js"

beforeEach(() => {
    userStore.clear()
})

test("register success", () => {
    const user = register("test@email", "password")
    expect(user.email).toBe("test@email.com")
})

test("duplicate email", () => {
    register("test@email.com", "password")
    expect(() => register("test@email.com", "password")).toThrow("Email already exists")
})