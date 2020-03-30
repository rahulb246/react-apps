// import react & react dom
import React from  'react';
import ReactDOM from 'react-dom';

// create a react component
const App = function() {
    const buttonText = 'Click Me!'
    // const buttonText = 1234
    // can be number, array of numbers(value of button will be concatenated values in array), array of strings
    //
    // buttonText = {text: 'click me'};
    // this cant be reffered in jsx as {buttonText} : throws an error as react doesnt know how to deal with objects
    // use {buttonText.text} instead
    //
    // but for proprty value, example : style
    // const style = {backgroundColor: 'blue', color: 'white'}
    // can be reffered as <button style={style}> 

    // return <div> hi there!</div>
    // can use class in place of className for jsx
    return (
        <div>
            <label className="lable" htmlFor="name">
                Enter Name:
            </label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {buttonText}
            </button>
        </div>
    )
};

// take react component and show it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);