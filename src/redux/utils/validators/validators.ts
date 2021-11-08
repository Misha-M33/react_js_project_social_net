export type fieldValidatorType=(value: string)=> string | undefined

export const required: fieldValidatorType = (value) => {
  if (value) return undefined

  return ' Field is required'
}

export const maxLengthCreator = (maxLength: number): fieldValidatorType => value => {
  if (value.length>maxLength) return `Max length is ${maxLength} symbols`
  return undefined
}


export const maxLength30: fieldValidatorType = value => {
  if (value.length>30) return 'Max length is 30 symbols'
  return undefined
}