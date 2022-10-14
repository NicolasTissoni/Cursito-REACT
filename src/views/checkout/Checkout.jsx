import React, { useState, useContext } from 'react';
import ButtonRedirect from '../../components/buttonsGlobals/buttonRedirect/ButtonRedirect';
import CartContext from '../../context/CartContext';

import './checkout.scss';

const Checkout = () => {
    const { values, getTotal } = useContext(CartContext);
    const [valores, setValores] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        direction: '',
        postalCode: '',
    });

    const [errorName, setErrorName] = useState(false);
    const [errorLastName, setErrorLastName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [errorDirection, setErrorDirection] = useState(false);
    const [errorPostalCode, setErrorPostalCode] = useState(false);

    const fillOutForm = (e) => {
        const { name, value } = e.target;

        setValores({
            ...valores,
            [name]: value,
        });
    };

    const controllError = () => {
        valores.name === '' ? setErrorName(true) : setErrorName(false);
        valores.lastName === '' ? setErrorLastName(true) : setErrorLastName(false);
        valores.email === '' ? setErrorEmail(true) : setErrorEmail(false);
        valores.phone === '' ? setErrorPhone(true) : setErrorPhone(false);
        valores.direction === '' ? setErrorDirection(true) : setErrorDirection(false);
        valores.postalCode === '' ? setErrorPostalCode(true) : setErrorPostalCode(false);
    };

    const validateForm = (e) => {
        e.preventDefault();

        controllError();

        if (
            errorName ||
            errorLastName ||
            errorEmail ||
            errorPhone ||
            errorDirection ||
            errorPostalCode
        ) {
            console.log('hehe');
        }
    };

    const checkout = () => {
        const purchase = {
            compra: {
                nombre: valores.name,
                apellido: valores.lastName,
                email: valores.email,
                telefono: valores.phone,
                direccion: valores.direction,
                codigoPostal: valores.postalCode,
            },
            items: values.itemCart,
            total: getTotal(),
        };

        // la wea de compra
    };

    return (
        <div>
            <h2 className="title">Checkout</h2>
            <form method="post" onSubmit={validateForm}>
                <div className="form-container">
                    <div>
                        <label>Nombre</label>
                        <input
                            type="text"
                            placeholder="Nombre"
                            name="name"
                            onChange={fillOutForm}
                        />
                        {errorName && <p className="error">El campo nombre es obligatorio</p>}
                    </div>
                    <div>
                        <label>Apellido</label>
                        <input
                            type="text"
                            placeholder="Apellido"
                            name="lastName"
                            onChange={fillOutForm}
                        />
                        {errorLastName && <p className="error">El campo apellido es obligatorio</p>}
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={fillOutForm}
                        />
                        {errorEmail && <p className="error">El campo email es obligatorio</p>}
                    </div>
                    <div>
                        <label>Numero de Telefono</label>
                        <input
                            type="number"
                            placeholder="Numero"
                            name="phone"
                            onChange={fillOutForm}
                        />
                        {errorPhone && <p className="error">El campo telefono es obligatorio</p>}
                    </div>
                    <div>
                        <label>Direccion</label>
                        <input
                            type="text"
                            placeholder="Direccion"
                            name="direction"
                            onChange={fillOutForm}
                        />
                        {errorDirection && (
                            <p className="error">El campo direccion es obligatorio</p>
                        )}
                    </div>
                    <div>
                        <label>Codigo Postal</label>
                        <input
                            type="text"
                            placeholder="Codigo Postal"
                            name="postalCode"
                            onChange={fillOutForm}
                        />
                        {errorPostalCode && (
                            <p className="error">El campo codigo postal es obligatorio</p>
                        )}
                    </div>
                    <div className="pago-container">
                        <div className="pago1-container">
                            <span>EFECTIVO</span>
                            <i className="fa-solid fa-sack-dollar"></i>
                            <input type="radio" name="pago" />
                        </div>
                        <div className="pago2-container">
                            <span>TARJETA</span>
                            <i className="fa-solid fa-credit-card"></i>
                            <input type="radio" name="pago" />
                        </div>
                    </div>
                    <div className="button-cont">
                        <input type="submit" text="Comprar" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
