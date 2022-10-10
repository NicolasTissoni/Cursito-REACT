import React from 'react';
import ButtonSimple from '../../components/buttonSimple/ButtonSimple';
import './checkout.scss'

const Checkout = () => {
    return (
        <div>
            <h2 className='title'>Checkout</h2>
            <form>
                <div className='form-container'>
                    <label>Nombre</label>
                    <input type="text" placeholder=' Nombre' />
                    <label>Apellido</label>
                    <input type="text" placeholder=' Apellido' />
                    <label>Email</label>
                    <input type="email" placeholder=' Email' />
                    <label>Numero de Telefono</label>
                    <input type="number" placeholder=' Numero' />
                    <label>Direccion</label>
                    <input type="text" placeholder=' Direccion' />
                    <label>Codigo Postal</label>
                    <input type="text" placeholder=' Codigo Postal'/>
                    <div className='pago-container'>
                        <div className='pago1-container'>
                            <span>EFECTIVO</span>
                            <i className="fa-solid fa-sack-dollar"></i>
                            <input type="radio" name='pago'/>
                        </div>
                        <div className='pago2-container'>    
                            <span>TARJETA</span>
                            <i className="fa-solid fa-credit-card"></i>
                            <input type="radio" name='pago'/>
                        </div>
                    </div>
                    <div className='button-cont'>
                        <ButtonSimple text='COMPRAR' simpleLink={'/'}/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;