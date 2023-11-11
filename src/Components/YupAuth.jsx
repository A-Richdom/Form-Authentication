import * as Yup from 'yup'

export const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Address').required('Required'),
    name: Yup.string().min(5, 'Name must be at 5 Characters or more ').required('Required'),
    password: Yup.string().max(3, 'Password must be 3 Characters or less').required('Required')
});
