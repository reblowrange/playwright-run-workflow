import React, { useState } from 'react';


const Footer = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    return (
        <footer className="footer">
            <div>
                Powered by <a href="https://bitheap.tech">bitheap.tech</a>
            </div>
            <div>
                <button onClick={incrementCounter}>Increment Counter</button>
                <span> Counter: {counter} </span>
            </div>
        </footer>
    );
};

export default Footer;