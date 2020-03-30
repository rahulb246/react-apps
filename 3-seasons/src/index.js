import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    // component life cycle : 
    // constructor -> render -> componentDidMount -> componentDidUpdate -> componentWillUnmount
    // TIME ----------------> ---------------------> -----------------> ------------------------>
    //
    //
    // (can be ignored) other lifecycle methods which are not used much
    // shouldComponentUpdate, getDerivedStateFromProps, getSnapShotBeforeUpdate

    // javascript related function (not react's), can be used to initialize state
    // automatically called when new component instance is created
    // this method is optional & good place to do one time setup 

    state = { lat: null, errorMessage: ''};

    // alternate way to initialize state
    //
    // constructor(props) {
    //     // to make sure React.Component constructor is also gets called
    //     super(props);
        
    //     // only time direct assignment is made to this.state
    //     // need to use setSate later
    //     this.state = { lat: null, errorMessage: '' };
    // }

    // recommended as a good place to do data loading
    componentDidMount() {
        // console.log('my component was rendered to the screen');

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // console.log(position);
                
                // update state prop lat
                this.setState({ lat: position.coords.latitude});
            },
            err => {
                // console.log(err)
                this.setState({ errorMessage: err.message });
            }
        );
    }

    // good place to do more data loading when state/props change
    componentDidUpdate() {
        console.log('my component was just updated - it rerendered!');
    }

    // good place to do cleanup 
    componentWillUnmount() {
        console.log('my component will get unmounted');
    }

    renderHelper() {
        // don't put logic or multiple returns in render()
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error : {this.state.errorMessage}</div>
        }
        else if (this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        else {
            return <Spinner message="please accept location request"/>
        }
    }

    // react says we have to define render that returns some jsx
    // mandatory for all class based components & only return jsx
    // will called many times : everytime component is updated
    render() {
        return (
            <div className="border red">
                {this.renderHelper()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
