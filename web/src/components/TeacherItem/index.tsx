import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem(){
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSG0viBsqHXZQt9TVQAsA_BkHna4pIdx73H5A&usqp=CAU"
                        alt="Carlos Renato"></img>
                        <div>
                            <strong>Carlos Renato</strong>
                            <span>Química</span>
                        </div>
                    </header>
                    <p>
                    The key to successful brand integration in content 
                    <br></br>
                    <br></br>
                    is ensuring it logically fits the product benefits and the show benefits, speaking at Powered by Nine’s Big Ideas Store, Swift said good content integration is “where it makes sense, good is where it logically fits, and good is where the product benefits but also the show benefits”.
                    </p>
                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Wp"></img>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
        )
}

export default TeacherItem;