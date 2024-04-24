export const validateUsername = (username) =>{

    const regex = /^\S{6,12}$/

    return regex.test(username)
}

export const validateUsernameMessage = 'El username debe tener entre 6 a 12 caracteres sin espacio'
