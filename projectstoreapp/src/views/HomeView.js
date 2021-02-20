import React from 'react'
import Tarjetas from '../components/Tarjetas'
import Navbar from "../components/Navbar"


export default function HomeView() {
    return (
        <div className="mt-4">
            <Navbar/>
            <hr/>
            <h1>StoreApp</h1>
            <Tarjetas/>            
        </div>
    )
}