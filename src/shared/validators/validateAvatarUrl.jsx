export const validateAvatarUrl = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/

    return regex.test(url)

}

export const avatarUrlvalidationMessage = 'Por favor ingresa una URL valida'
// avatarUrlvalidationMessage = a este se le puede cambiar para que sea menor si nosotros lo deseamos pero ahora es para ser mas especifico

