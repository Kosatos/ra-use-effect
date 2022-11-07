export interface IUser {
  id: number
  name: string
}

export interface IUserDetails {
  id: number
  name: string
  avatar: string
  details: {
    city: string
    company: string
    position: string
  }
}
