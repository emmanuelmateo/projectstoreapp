import React, {useState, Fragment} from 'react';

const Formulario = ()=>{

        const [datos, setDatos] = useState({
            nombre: '',
            mail:'',
            password:'',
            password:'',

        })
    return(
        <Fragment>
            <h1>Crear cuenta</h1>    
            <form ClassName="row"> 
                <div className="col-md-3">
                    <input
                    placeholder = "Ingrese Nombre"
                    ClassName="form-control"
                    type="text"
                    name="nombre"
                    onChange={handleInputChange}//el encargado de estar pendiente de mi input
                    ></input>
                </div>
                <div className="col-md-3">
                    <input
                    placeholder = "Ingrese Nombre"
                    ClassName="form-control"
                    type="email"
                    name="mail">
                    </input>
                </div>
                <div className="col-md-3">
                    <input
                    placeholder = "Ingrese Nombre"
                    ClassName="form-control"
                    type="password"
                    name="password"
                    ></input>
                </div>
                <div className="col-md-3">
                    <input
                     placeholder = "Ingrese Nombre"
                     ClassName="form-control"
                     type="password"
                     name="password1"
                     ></input>
                </div>
                <div className="col-md-3">
                    <button ClassName="btn btn-primary" type="submit">Crear cuenta</button>
                </div>
            </form>
        </Fragment>
    )
}

export default Formulario;