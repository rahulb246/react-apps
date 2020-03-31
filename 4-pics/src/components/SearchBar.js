import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};

    onFormSubmit = event => {
        event.preventDefault();

        // when using props inside a function of class based compenent
        // porops are used as this.props and this is how child passes data to parent component
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}> 
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={e => 
                            this.setState({ term: e.target.value.toUpperCase()})
                        }/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;