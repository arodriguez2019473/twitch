export const validateDescription = (description) => {

    return description.length >= 10 && description.length <= 200

}

export const descriptionValidationMessage = 'La descripcion debe de tener entre 10 y 200 caracteres'
// descriptionValidationMessage = a este se le puede cambiar para que sea menor si nosotros lo deseamos pero ahora es para ser mas especifico
