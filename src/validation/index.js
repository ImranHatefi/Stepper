import{object,string} from 'yup'

export const step1Val = object({
    name:string().required().max(5)
})

export const step2Val = object({
    surname:string().required()
})

export const step3Val = object({
    country:string().required()
})
