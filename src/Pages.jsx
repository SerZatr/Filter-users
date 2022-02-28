import PageButton from "./PageButton";
import React from "react";

/**
 * @component Pages
 * renders block of page buttons
 */
class Pages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedPage: this.props.selectedPage}
    }
    render() {
        let pages = [];
        for(let i=0; i<this.props.pagesCount; i++) {
            let num = i+1;
            pages.push(
                  <PageButton num={num} key={i} onClick={ (num)=> {this.props.onClick(num); this.setState({selectedPage: i})} } className={this.state.selectedPage == i ? 'selected' : ''} />
              );
        }

        return (
            <div style={{display: 'flex', width:'100%', justifyContent:'center'}}>
                {pages}
            </div>
        )}
}

export default Pages;