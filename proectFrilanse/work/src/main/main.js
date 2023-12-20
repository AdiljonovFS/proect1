import React from 'react'
import Navbar from '../navbar/navbar'
import './main.css'

const Main = () => {
  return (
    <div className="mainBody">
        <Navbar/>
        <div >
            <div className="conteaner flex">
                <div className="mainMolamsh">
                    <h1>НПК МОлмаш</h1>
                    <p>Научно-производственная компания</p>
                </div>
                <div className="mainMenu colum">

                </div>

            </div>
        </div>
    </div>
  )
}

export default Main
