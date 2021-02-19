import React, {Fragment} from 'react'
import {Route} from "react-router-dom"

//importando componente vistas
import HomeView from './views/HomeView'
import DetalleView from './views/DetalleView'

export default function routes() {
    return (
        <Fragment>
            {/* definir rutas*/}
            <Route path="/" exact component={HomeView} />
            <Route path="/detalle/:id" exact component={DetalleView} />            
        </Fragment>
    )
}
