import React, { Component } from 'react';


export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        // this.state = { term: '' };
    }
    render() {
        return (
            <div className='search-bar'> 
                <input placeholder="     Search" onChange={(event)=> this.props.onSearch(event.target.value)} />
            </div>
        ); 
        // whenever a jsx is transpiled into js, React.createElement() method is invoked,
        //     //hence we need to import react in all the individual files.
    }

    // inputChange(term){
    //     // this.setState({term:term});
    //     this.props.onSearch(term);
    // }
}


