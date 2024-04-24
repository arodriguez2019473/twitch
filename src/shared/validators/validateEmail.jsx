export const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;

    return regex.test(email)
}

    export const emailUrlValidationMessage = 'Por favor ingresar un email valida'