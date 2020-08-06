import React from 'react';

//Router Manager
import { BrowserRouter, Route } from 'react-router-dom';

//Pages
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Landing} exact />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    )
}

export default Routes;