import React from 'react';

interface InputProps {

}
const Input: React.FC<InputProps>= () => {
    return(
        <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
        </div>
    );
}

export default Input;