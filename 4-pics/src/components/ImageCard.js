import React from 'react';

class ImageCard extends React.Component {
    // this is to make sure image list looks good with proper width/height
    // width is 250px by default. height is set as 10px but some pics are shown cut
    // to tackle that we need to allow more height for those pics which is done 
    // by setting span to grid-row-end : 'span 2' means doubles row height
    //
    // logic :
    // let the image card render itself and its image
    // reach into the DOM & figure out the height of img
    // set the img height on state to get the component to rerender
    // when rerendering, assign a grid-row-end to make sure the img takes appropriate space

    constructor(props) {
        super(props);

        // instead of using document.quesrySelector("img").clentHeight
        // react has another way 'Refs' to access DOM
        // React Refs : - ive access to a single DOM element
        //              - we create refs in constructor, assign them to instance variables
        //              - then pass to a particular JSX element as props

        this.imageRef = React.createRef();
        this.state = { spans: 0 };
    }

    componentDidMount() {
        // console.log(this.imageRef);
        // gives img tag : expand and we can see clientHeight
        //
        // console.log(this.imageRef.current.clientHeight);
        // shows 0 : this is because in console, unless img is expanded details aren't loaded
        //           so the details can't be accessed directly 

        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10); 
        this.setState({ spans})
    }

    render () {
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img 
                    alt= { description }
                    src = { urls.regular }
                    ref = { this.imageRef }
                />
            </div>
        );
    }
};

export default ImageCard;