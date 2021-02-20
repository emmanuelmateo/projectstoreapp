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
            <h1>StoreApp</h1>
            <Tarjetas/>            
        </div>
    )
}