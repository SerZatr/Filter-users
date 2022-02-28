import PageButton from "./PageButton";
import React from "react";

/**
 * @component Pages
 * renders block of page buttons
 */
class Pages extends React.Component {
    render() {
        let pages = [];
        for(let i=0; i<this.props.pagesCount; i++) {
            let num = i+1;
            pages.push(
                  <PageButton num={num} key={i} onClick={ (num)=> {this.props.onClick(num); } } className={this.props.selectedPage == i ? 'selected' : ''} />
              );
        }

        return (
            <div style={{display: 'flex', width:'100%', justifyContent:'center'}}>
                {pages}
            </div>
        )}
}

export default Pages;
