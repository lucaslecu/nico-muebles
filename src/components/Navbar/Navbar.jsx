import './estilos.css';
import React from 'react';
import { Image } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
    <div className="nav-principal">
        <div className='menu-logo'>
            
            <Image className ='logo' src="./logo_nico.png" roundedCircle />
        </div>
        <div className='menu-principal'>
        <ul>
            <li><button className='button-menu'> Quienes somos</button></li>
            <li><button className='button-menu'> Muebles</button></li>
            <li><button className='button-menu'> Nosotros</button></li>
            <CartWidget />
        </ul>
           
        </div>
        
        





    </div>
    );
};


export default Navbar;
