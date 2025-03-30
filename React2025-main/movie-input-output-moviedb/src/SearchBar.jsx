import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state.term);

        this.props.onSearchMovie(this.state.term);
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} role="search">
                <div className=" input-group">
                    <input type="text" value={this.state.term} onChange={ (e) => this.setState({term: e.target.value})}/>
                    <button className="btn btn-default" onClick={this.onFormSubmit}>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </form>
        )
    }
}

export default SearchBar;