import React, { useState } from 'react';
import './button.scss';
const Button = () => {
    const [x, setX] = useState(false);
    return (
        <div>
            <button className="random-react-button" onClick={() => setX(!x)}>click</button>
        </div>
    )
}

export default Button;