import React, { useContext } from 'react';
import FormsLogin from '../components/FormsLogin';
import angel from '../img/angel.svg';
import context from  '../context/context';
import Jumbotron from '../components/Jumbotron';

function Login() {
    const { setFormType } = useContext(context);

    const formAngel = () => {
        setFormType('guardian');
    }

    const formKid = () => {
        setFormType('user');
    }

    return (
        <section className="d-flex flex-column justify-content-center align-items-center">
            <Jumbotron />
           <img src={ angel } width="75%" alt="logo"/>
           <div className="d-flex w-50 justify-content-around m-3">
                <button type="button" className="btn btn-warning p-3 m-3" onClick={ formKid }>Cadastrar Protegido</button>
                <button type="button" className="btn btn-warning p-3 m-3" onClick={ formAngel }>Cadastrar Anjo</button>
            </div>
            <FormsLogin />
        </section>
    );
}

export default Login;