import { useState } from "react"
import { Logo } from "./Logo"
import { Input } from "./Input"

import { 
    emailUrlValidationMessage,
    passwordValidationMessange,
    validateEmail,
    validatePassword
 } from '../shared/validators'

import { useLogin } from "../shared/hooks/useLogin"

export const Login = ({switchAuthHandler}) => {
  
    const {login,isLoading} = useLogin()

    const [ formState, setFormState ] = useState({
        
        email:{
            
            value:"",
            isvalid: false,
            showError:false

        },
        password:{
            value:"",
            isvalid: false,
            showError: false
        },
    
    });

    const handlerInputValueChange = (value, field) => {
        setFormState((prevState) =>({
            ...prevState,
            [field]:{
                ...prevState[field],
                value
            },
        }));
    };

    const handlerInputValidationOnBlur = (value, field) => {
        let isvalid = false
        switch(field){
            
            case 'email':
                isvalid = validateEmail(value);
                break;
            case 'password':
                isvalid = validatePassword(value);
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

    const handlerLogin = (event) => {
        event.preventDefault()

        login(formState.email.value, formState.password.value)
    }

    const isSubmitButtonDisable = isLoading || !formState.password.isvalid || !formState.email.isvalid

return (
    
    <div className="login-container">

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

            field='password'
            label='Password'
            value={formState.password.value}
            onchangeHandler={handlerInputValueChange}
            type='password'
            onBlurHandler={handlerInputValidationOnBlur}
            showErrorMessage={formState.password.showError}
            validationMessage={passwordValidationMessange}

        />
        
        <button onClick={handlerLogin} disabled={isSubmitButtonDisable}>

            log in

        </button>

    </form>

    <span onClick={switchAuthHandler} className="auth-form-switch-label">
        Aun no tienes una cuenta? !Registrate....!
    </span>

    </div>

    )
};
