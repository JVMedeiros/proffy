import React from 'react';

//Assets
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/53566373?s=460&u=a0e27b7fd1a2a61dd033c68ecd2e918d7cf86bd1&v=4" alt="JVMedeiros"/>
            <div>
                <strong>João Medeiros</strong>
                <span>Matemática</span>
            </div>
        </header>

        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>

        <footer>
            <p>
                Preço/Hora
                <strong>R$25,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contato
            </button>
        </footer>
        </article>
    );
}

export default TeacherItem;