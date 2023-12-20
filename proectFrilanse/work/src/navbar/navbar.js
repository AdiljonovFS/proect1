import React from 'react'
import "./navbar.css"
import logo from '../img/logored.svg'
import phone from '../img/phon.svg'
import pocht from '../img/email.svg'
import search from '../img/search.svg'



const Navbar = () => {
  return (
    <div>
      <nav className='conteaner flex'>
        <img src={logo} alt="" className="navLogo" />
        <div className="phone flex">
            <img src={phone} alt="" className=' img phoneNav' />
            <p className='phonNamberNav'>+7 804 333 68 02</p>
            <p className='phonNamberNavText'>Бесплатный по России</p>
        </div>
        <div className="emailNav flex">
            <img src={pocht} alt="" className='img'/>
            <p>info@npkmolmash.ru</p>
        </div>
        <div className="searchAndButton flex">
            <img src={search} alt="" className='img' />
            <button className='btnNav'>Написать нам</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
