// Mock database module for testing

export interface User {
  id: number
  name: string
  email: string
}

const mockUsers: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
]

export const getUsers = (): User[] => mockUsers

export const getUserById = (id: number): User | undefined =>
  mockUsers.find(user => user.id === id)

export const createUser = (name: string, email: string): User => {
  const newUser = { id: mockUsers.length + 1, name, email }
  mockUsers.push(newUser)
  return newUser
}
