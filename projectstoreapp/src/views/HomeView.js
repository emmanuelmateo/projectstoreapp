import React from 'react'
import Tarjetas from '../components/Tarjetas'
import Navbar from "../components/Navbar"
import Carousel from "../components/Carousel"


export default function HomeView() {
    return (
        <div className="mt-4">
            <Navbar/>
            <hr/>
            <Carousel/>
            <hr/>
            <div style={{backgroundColor: '#231F20', textAlign:'center'}}  >
                <p 
                style={{
                    color: '#FFFFFF', 
                    // textAlign:'center', 
                    // alignContent:'center',
                    fontSize:'28',
                    height:'50px',
                    // marginTop:'0' ,
                    // marginBottom:'0'
                    // backgroundColor:'#F48024'
                    }}>
                        Ofertas de la semana
                </p>
            </div>                                                             
            <Tarjetas/>                                  
        </div>
    )
}