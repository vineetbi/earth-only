import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    firstName: Yup.string().min(1).required('PLease enter you first name'),
    lastName: Yup.string().min(1).required('PLease enter you last name'),
    email: Yup.string().email().required('PLease enter you email'),
    password: Yup.string().min(6).required('Please enter you password'),
    companyName: Yup.string(),
    role: Yup.string().required('PLease enter your role'),
    country: Yup.string().required('Please enter your country / region'),
    language: Yup.string().required('Please enter your primary development language')
})
