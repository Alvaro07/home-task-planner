import { create } from 'zustand'

interface UserState {
  users: string[]
  addUser: () => void
}

export const useUsers = create<UserState>((set, get) => {
  return {
    users: [],
    addUser: () => {
      const { users } = get()
      set({ users: [...users, crypto.randomUUID()] })
    },
  }
})
