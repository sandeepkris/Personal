import React, { Component } from 'react';


export default class SearchBar extends Component {
    constructor(props) {
        super(props);

       
    }
    render() {
        return (
            <div className='search-bar'> 
                <input placeholder="     Search" onChange={(event)=> this.props.onSearch(event.target.value)} />
            </div>
        );
    }

 
}


