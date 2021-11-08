export type messageDataType= {
  id: number, 
  message: string, 
  likeCount: number 
}
export type contactsType= {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youTube: string
  mainLink: string
}
export type photosType= {
  small: string | null
  large: string | null 
}
export type profileType= {
  userId: number, 
  fullName: string, 
  lookingForAJob: boolean,
  lookingForAJobDescription: string,
  aboutMe: string
  contacts: contactsType
  photos: photosType
}
export type userType={
  id: number
  name: string 
  status: string 
  photos: photosType
  followed: boolean
}