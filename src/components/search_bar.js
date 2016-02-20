  import React, { Component } from 'react';

// This is the component in its function-based (dumb) form
// const SearchBar = () => {
//   return <input />;
// }

//we've made this a class-based (smart) component, to allow it to respond to events & store/modify state
class SearchBar extends Component { //don't have to write React.Component because of our special import statement
  constructor(props) {
    super(props);

    //only needed if not using thunk
    //this.onInputChange = this.onInputChange.bind(this); //React doesn't bind this to non-react methods like our onInputChange method, so we gotta do it here.
    this.state = {term: 'surfboards'};
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );

    //anonymous functions may be ran instead of callouts to functions defined inside our class:
    //return <input onChange={(event) => console.log('input has become:', event.target.value)} />;

    //updated state thunk:
    // return (
    //   <div>
    //     <input
    //       value={this.state.term}
    //       onChange={event => this.setState({term: event.target.value})} />;
    //     Value of the input: {'\"' + this.state.term + '\"'}
    //   </div>
    // );
  }

  //event handler
  onInputChange(term) {
    //console.log('input has become:', event.target.value);
    //console.log('event was:', event);
    //console.log(this)

    this.setState({term})
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;