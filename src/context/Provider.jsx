import React, {
    useState
} from 'react';
import context from './context';

function Provider({ children }) {

    const [ formType, setFormType ] = useState('');
    const [ register, setRegister ] = useState([]);
    const [ formValidation, setFormValidation ] = useState(false)
    const [ childrenRegister, setChildrenRegister ] = useState([]);
    const [ registerType, setRegisterType ] = useState('');
    const [ authLogin, setAuthLogin ] = useState({});

    const value = {
        formType,
        setFormType,
        register,
        setRegister,
        formValidation,
        setFormValidation,
        childrenRegister,
        setChildrenRegister,
        registerType,
        setRegisterType,
        authLogin,
        setAuthLogin 
    };

    return(
      <context.Provider value={ value }>
          { children }
      </context.Provider>
    );
}

export default Provider;