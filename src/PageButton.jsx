import React from "react";

/**
 * @component PageButton
 * renders button for page selection
 */
class PageButton extends React.Component {
    render() {
        return(
            <button
                onClick={ (event) => {
                    event.preventDefault();
                    this.props.onClick(this.props.num-1)
                }}
                className={'pageButton' + ' ' + this.props.className}
                style={{ display:'flex', width:'32px', height:'32px', border:'1px solid #aaa', marginLeft:'4px', marginRight:'4px', justifyContent:'center', alignItems:'center', userSelect:'none', borderRadius:'4px', cursor:'pointer',}}
             >
                <div>
                    {this.props.num}
                </div>
            </button>
        )
    }
}

export default PageButton;