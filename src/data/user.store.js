const users = []

export function findByEmail(email) {
    return users.find(user => user.email === email)
}

export function save(user) {
    users.push(user)
    return user
}

export function clear() {
    users.length = 0
}