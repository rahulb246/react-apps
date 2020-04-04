import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
// import selectSong from '../actions/index.js' 
// when webpack doesn't see a file name in import statements : 
// it'll search and return index.js by default

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// by default, it gets called with state returned by reducer
// after this returns : songs will be made available in this.props by redux store
// for every action(which might change store data) this function gets called
const mapStateToProps = state => {
  return { songs: state.songs };
};

// The connect() function connects a React component to a Redux store. It returns a function
// if called as connect()() it'll invoke the function that is returned by connect()
// same applies to all javascript functions that returns a function
// connect also does this job : 
// all the functions(action creators : selectSong) will be wired in redux cycle 
// so that when action is created(used in onClick), connect helps to dispatch this action by default
export default connect(
  mapStateToProps,
  { selectSong }
  // connect also makes selectSong available to this.props
)(SongList);