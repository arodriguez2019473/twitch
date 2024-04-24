import { useState } from "react"
import { Logo } from "./Logo"
import { Input } from "./Input"

import { 
  
    emailUrlValidationMessage,
    passwordValidationMessange,
    passwwordConfirmationMessage,
    validateUsernameMessage,

    validateEmail,
    validatePassword,
    validateUsername,
    validatePasswordConfim

 } from '../shared/validators'

import { useRegister } from "../shared/hooks/useRegister"

export const Register = ({switchAuthHandler}) => {
  
    const {register,isLoading} = useRegister()

    const [ formState, setFormState ] = useState({
        
        email:{
            
            value:'',
            isvalid: false,
            showError:false

        },
      
        password:{
            
            value:'',
            isvalid: false,
            showError: false
        
          },
       
        passwordconfir:{
        
            value:'',
            isvalid: false,
            showError: false
      
        },

        username:{
      
            value:'',
            isvalid: false,
            showError: false
    
        }

    })

    const handlerInputValueChange = (value, field) => {
        setFormState((prevState) =>({
            ...prevState,
            [field]:{
                ...prevState[field],
                value
            }
        })) 
    } 

    const handlerInputValidationOnBlur = (value, field) => {
        let isvalid = false
        switch(field){
            
            case 'email':
                isvalid = validateEmail(value)
                break;
            
            case 'password':
                isvalid = validatePassword(value)
                break;
            
            case 'username':
                isvalid = validateUsername(value)
                break;
            
            case 'passwordconfir':
                isvalid = validatePasswordConfim(formState.password.value, value);
                break;            
                
            default:
            break;
            }

    setFormState((prevState) => ({
        ...prevState,
        [field]:{
            ...prevState[field],
            isvalid,
            showError: !isvalid
        }
    }))

    };

    const handlerRegister = (event) => {
        event.preventDefault()

        register(formState.email.value, formState.password.value, formState.username.value)
    }

    const isSubmitButtonDisable = isLoading || !formState.password.isvalid || !formState.email.isvalid || !formState.username.isvalid || !formState.passwordconfir.isvalid

return (
    
    <div className="register-container">

    <Logo text={'Kinalitos-Twitch'}/>
    
    <form className="auth-form">

        <Input

            field='email'
            label='Email'
            value={formState.email.value}
            onchangeHandler={handlerInputValueChange}
            type='text'
            onBlurHandler={handlerInputValidationOnBlur}
            showErrorMessage={formState.email.showError}
            validationMessage={emailUrlValidationMessage}

        />

        <Input

            field='username'
            label='Username'
            value={formState.username.value}
            onchangeHandler={handlerInputValueChange}
            type='text'
            onBlurHandler={handlerInputValidationOnBlur}
            showErrorMessage={formState.username.showError}
            validationMessage={validateUsernameMessage}

        />

        <Input

            field='password'
            label='Password'
            value={formState.password.value}
            onchangeHandler={handlerInputValueChange}
            type='password'
            onBlurHandler={handlerInputValidationOnBlur}
            showErrorMessage={formState.password.showError}
            validationMessage={passwordValidationMessange}

        />
        
        <Input

            field='passwordconfir'
            label='ConfirmarPassword'
            value={formState.passwordconfir.value}
            onchangeHandler={handlerInputValueChange}
            type='password'
            onBlurHandler={handlerInputValidationOnBlur}
            showErrorMessage={formState.passwordconfir.showError}
            validationMessage={passwwordConfirmationMessage}

        />


        
        <button onClick={handlerRegister} disabled={isSubmitButtonDisable}>

            Register

        </button>

    </form>

    <span onClick={switchAuthHandler} className="auth-form-switch-label">
        Ya tienes una cuenta || ...Inicia Sesion
    </span>

    </div>

    )
};
