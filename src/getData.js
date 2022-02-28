import list from './list.json';

/**
 * @function getData get data from list.json / localstorage
 * @returns data array
 */
function getData() {
    let data = '';
    if(localStorage.getItem('users') === null ) {
      localStorage.setItem('users', JSON.stringify(list.list));
      data = list.list
    } else {
      data = localStorage.getItem('users');
      data = JSON.parse(data);
    }   
    return data 
}

export default getData;