import React from 'react';
import ButtonRedirect from '../../components/buttonRedirect/ButtonRedirect';
import './checkout.scss';

const Checkout = () => {
    return (
        <div>
            <h2 className="title">Checkout</h2>
            <form>
                <div className="form-container">
                    <div className="container-label-input">
                        <label>Nombre</label>
                        <input type="text" placeholder="Nombre" />
                    </div>
                    <div className="container-label-input">
                        <label>Apellido</label>
                        <input type="text" placeholder="Apellido" />
                    </div>
                    <div className="container-label-input">
                        <label>Email</label>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="container-label-input">
                        <label>Numero de Telefono</label>
                        <input type="number" placeholder="Numero" />
                    </div>
                    <div className="container-label-input">
                        <label>Direccion</label>
                        <input type="text" placeholder="Direccion" />
                    </div>
                    <div className="container-label-input">
                        <label>Codigo Postal</label>
                        <input type="text" placeholder="Codigo Postal" />
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
                        <ButtonRedirect text={'Comprar'} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
