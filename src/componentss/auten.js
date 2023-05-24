import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Auten({ changeIng }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const u = 'kascenethde@gmail.com';
        const c = '12345';

        if (username === u && password === c) {
            console.log('--Bienvenido --Ingresó correctamente---')
            changeIng(true);
            navigate("/home");


        } else {
            alert('usuario o contraseña invalidos');
        }
    }


    function handleUsername(e) {
        const vr = e.target.value;
        setUsername(vr);
    }

    function handlePass(e) {
        setPassword(e.target.value)
    }

    return (


        <main role="main" className="container my-auto">


            <div className="row">
                <div id="login" className="col-lg-4 offset-lg-4 col-md-6 offset-md-3
                col-12">
                    <h2 className="text-center">Ingreso</h2>
                    <img className="img-fluid mx-auto d-block rounded"
                        src="https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758_1280.jpg" alt="principal" />

                    <form>
                        <div className="form-group">
                            <label for="correo">Usuario</label>
                            <input id="correo" name="correo"
                                className="form-control" type="email"
                                placeholder="Correo electrónico"
                                onChange={handleUsername} />
                        </div>
                        <div className="form-group">
                            <label for="palabraSecreta">Contraseña</label>
                            <input id="palabraSecreta" name="palabraSecreta"
                                className="form-control" type="password"
                                placeholder="Contraseña"
                                onChange={handlePass} />
                        </div>
                        <br />
                        <button type="submit"
                            className="btn btn-primary mb-2"
                            onClick={handleSubmit}>
                            Entrar
                        </button>
                        <br />

                    </form>
                </div>
            </div>

            <div className="container">
                <div className="row" >
                    <div className="col">
                        <i className="bi bi-twitter"></i>
                    </div>
                    <div className="col">
                        <i className="bi bi-facebook"></i>
                    </div>
                    <div className="col">
                        <i className="bi bi-instagram"></i>
                    </div>
                    <div className="col">
                        <i className="bi bi-envelope"></i>
                    </div>
                    <div className="col">

                        <i className="bi bi-whatsapp"></i>

                    </div>
                    
                    <div className="col">
             
                    
            <i className="bi bi-cart4"></i>
            </div>

                </div>
            </div>

        </main>
    )
}



export function Landing() {
    return (
        <h3>Promoción</h3>)

}

