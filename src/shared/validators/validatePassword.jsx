export const validatePassword = (password) =>{

    const regex = /^\S{6,12}$/

    return regex.test(password)

}

export const passwordValidationMessange = 'la constrase;a debe tener entre 6 a 12 caracteres sin espacio'

