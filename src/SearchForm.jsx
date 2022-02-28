import React from "react";

/**
 * @component SearchForm
 * Renders text input and button
 */
class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <>
                <input type='text' placeholder='Введите ФИО или его часть' style={{height: '32px', width: '396px', boxSizing: 'border-box'}} onChange={ (event) => this.handleChange(event) }>
                </input>
                <button style={{height: '32px', width: '80px', marginLeft: '4px', boxSizing: 'border-box'}} name='SearchButton' onClick = {
                    (event) => {
                     event.preventDefault();
                     this.props.onClick(this.state.value)
                 }}>
                     Искать
                 </button>
            </>
        )
    }
}

export default SearchForm; 