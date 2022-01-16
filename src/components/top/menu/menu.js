import react from 'react';
import React from 'react';
import ReactDOM from 'react-dom';


import "./menu.css"


class Menu extends react.Component {
    render() {
        return (
            <>
                   

                <div className='scale-up-hor-right containerMenu'>
                    <div className="collapse" id="navbarToggleExternalContent">
                        <div className="bgPreto p-4">
                            <h5 className="text-white h4">Collapsed content</h5>
                            <span className="text-muted">Toggleable via the navbar brand.</span>
                        </div>
                    </div>
                    <nav className="navbar navbar-dark  ">
                        <div className="container-fluid ">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="fas fa-bars"></i>                        </button>
                            <div className="brand d-flex justify-content-center">
                                <div className='imagemLogo2'>
                                    <img
                                        className='iconMenu'
                                        src="https://media-private.canva.com/hvelM/MAE1GBhvelM/1/tl.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20220110%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220110T130116Z&X-Amz-Expires=57378&X-Amz-Signature=eec78d9491088826b8b6bf35aaf99d8d8f049267921860ffba2d045c2fe8dc24&X-Amz-SignedHeaders=host&response-expires=Tue%2C%2011%20Jan%202022%2004%3A57%3A34%20GMT" >

                                    </img>

                                </div>
                            </div>
                        </div>


                    </nav>
                </div>
            </>
        )
    }
}

export default Menu