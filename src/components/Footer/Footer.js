import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <h3>How React works..</h3>
                <p>React is a modern JavaScript library. Basically react app contains two DOM for operating the app. One is Virtual DOM and the other is Browser DOM. Browser DOM is that which is developed by the developer. Virtual DOM is created when the react app compiled and run. <br />
                    A react app has many components for each portion of its necessary purpose. We can write HTML code here but it is not really HTML. It in known as JSX that is JavaScript XML which is like HTML. <br />
                    When any portion of the app changed by the Browser DOM, the Virtual DOM then compare with the Browser DOM and apply change to that specific portion.</p>
            </div>
            <div>
                <h3>Difference between props and state</h3>
                <p>Props is the short form of properties. We use the props to pass data from one component to another component. We can not change or update or modify the props value. That means props is read-only. <br />
                    The other thing state is the re-rendering property that is use inside the component. Normally state updates the component by re-rendering the component. State can be modified using this.setState.</p>
            </div>
            <div>
                <h3>How useState works..</h3>
                <p>
                    useState is a react hook that controls the changes inside a component. It handles the state variable in the functional components. Normally we declare the state with a initial value and inside the component we can handle the state with a state function under any functionality and then set the state value.
                </p>
            </div>
        </div>
    );
};

export default Footer;