import react from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

import "./info.css"


class Info extends react.Component {
    render() {
        return (
            <>
                <div className='container'>
                    <div className='infoMenuBackground d-flex'>
                        <div className='ImgInsta'>
                            <img className='ImgInsta' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png'></img>
                        </div>
                        <div>
                            <a className='linkInsta' href='https://www.instagram.com/up.project.oficial/?hl=pt-br'>@up.project.oficial</a>
                        </div>
                        <div className='ImgWpp'>
                            <img className='ImgWpp' src='https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png'></img>
                        </div>
                        <div>
                            <a className='linkWpp' href='https://api.whatsapp.com/send?phone=5551984743961&text=Vim%20pelo%20site.'>(51) 9 8474-3961</a>
                        </div>
                        <div className='blockVazio'></div>
                        <div className='blockVazio'></div>

                    </div>   
                </div>
                
            </>
        )
    }
}

export default Info