import React from "react";
import changeUserState from './changeUserState';
import getStatusName from "./getStatusName";

/**
 * @component UserRow
 * Renders users name and status
 */
class UserRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {status: getStatusName(this.props.status)}
    }
    onClick() {
        this.setState( {status: changeUserState(this.props.id)} );
    }

    render() {
        return (
            <li style = {{display:'grid', alignItems:'center', gridTemplateColumns:'400px 80px', height: '36px'}}>
                    <div> {this.props.fullName} </div>
                    <button 
                        onClick = { (event) => {event.preventDefault(); this.onClick()} } 
                        style={{userSelect:'none', cursor:'pointer', width:'80px', boxSizing: 'border-box', height:'32px'}}
                    > 
                        {this.state.status}
                    </button>
            </li>
        )
    }
}

export default UserRow;