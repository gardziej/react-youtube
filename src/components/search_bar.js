import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
    }

    render () {
        return (
            <div className="search-bar">
                <input
                    placeholder="search video"
                    value={this.state.term}
                    onChange={this.onInputChange} />
            </div>
        )
    }

    onInputChange(e) {
        this.setState({term: e.target.value});
        this.props.onSearchTermChange(e.target.value);
    }
}

export default SearchBar;
