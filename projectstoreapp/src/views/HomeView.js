import React from 'react'
import Tarjetas from '../components/Tarjetas'

import BootstrapNavbar from '../components/BootstrapNavbar';

export default function HomeView() {
    return (
        <div className="mt-4">
            <BootstrapNavbar/>
            <h1>StoreApp</h1>
            <Tarjetas/>            
        </div>
    )
}