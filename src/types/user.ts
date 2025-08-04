export interface User {
  name: {
    first: string
    last: string
  }
  email: string
  picture: {
    large: string
  }
  location?: {
    city?: string
    country?: string
  }
}
