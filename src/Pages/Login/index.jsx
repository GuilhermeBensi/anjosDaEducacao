import React from 'react';
import FormsLogin from '../../components/FormsLogin/index';
import angel from '../../img/angel.svg';
import Jumbotron from '../../components/Jumbotron';

import Footer from '../../components/Footer';

import * as S from './styled'

const Login = () => {
    return (
        <>
            <Jumbotron />
              <S.Image src={ angel } alt="logo"/>
            <FormsLogin />
            <Footer/>
        </>
    );
}

export default Login;
