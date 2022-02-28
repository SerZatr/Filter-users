import './status.json';
import SearchForm from './SearchForm';
import React from 'react';
import Pages from './Pages';
import searchUsers from './searchUsers';
import getUsers from './getUsers';
import getData from './getData';

let data = getData();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {users: getUsers(data, '', 0), searchString: '', page:0}
}
  render() {
    return (
      <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
        <div style={{display: 'grid', width:'480px', gridTemplateRows: '56px 208px 40px', marginTop:'40px'}}>
          <div>
            <SearchForm onClick={ (searchString) => { this.setState({users: getUsers(data, searchString, 0), searchString, page:0}); console.log(this.state.page) }}  />
          </div>
          <ul className='users'>
            {this.state.users}
          </ul>
          <Pages selectedPage={this.state.page} pagesCount={Math.ceil(searchUsers(data, this.state.searchString).length/5)} onClick={ (page) => this.setState({users: getUsers(data, this.state.searchString, page), page})} />
        </div>
      </div>
        );}}

export default App;
