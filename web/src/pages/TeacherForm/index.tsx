import React from 'react';

//Assets
import './styles.css';

//Components
import PageHeader from '../../components/PageHeader';

function TeacherForm() {
    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo, é se cadastrar."
            />
        </div>
    )
}

export default TeacherForm;