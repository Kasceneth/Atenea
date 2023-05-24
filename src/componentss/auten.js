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


        <main role="main" class="container my-auto">


            <div class="row">
                <div id="login" class="col-lg-4 offset-lg-4 col-md-6 offset-md-3
                col-12">
                    <h2 class="text-center">Ingreso</h2>
                    <img class="img-fluid mx-auto d-block rounded"
                        src="https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758_1280.jpg" alt="principal" />

                    <form>
                        <div class="form-group">
                            <label for="correo">Usuario</label>
                            <input id="correo" name="correo"
                                class="form-control" type="email"
                                placeholder="Correo electrónico"
                                onChange={handleUsername} />
                        </div>
                        <div class="form-group">
                            <label for="palabraSecreta">Contraseña</label>
                            <input id="palabraSecreta" name="palabraSecreta"
                                class="form-control" type="password"
                                placeholder="Contraseña"
                                onChange={handlePass} />
                        </div>
                        <br />
                        <button type="submit"
                            class="btn btn-primary mb-2"
                            onClick={handleSubmit}>
                            Entrar
                        </button>
                        <br />

                    </form>
                </div>
            </div>

            <div class="container">
                <div class="row" >
                    <div class="col">
                        <i class="bi bi-twitter"></i>
                    </div>
                    <div class="col">
                        <i class="bi bi-facebook"></i>
                    </div>
                    <div class="col">
                        <i class="bi bi-instagram"></i>
                    </div>
                    <div class="col">
                        <i class="bi bi-envelope"></i>
                    </div>
                    <div class="col">

                        <i class="bi bi-whatsapp"></i>

                    </div>
                    
                    <div class="col">
             
                    
            <i class="bi bi-cart4"></i>
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

