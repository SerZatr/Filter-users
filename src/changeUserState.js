import list from './list.json';
import status from './status.json';
import getStatusName from "./getStatusName";

/**
 * @function changeUserState changes status to the next one
 * @param {*} index Array index of status
 * @returns statusText name of status
 */
function changeUserState(index) {
  let usersData = '';
  if(localStorage.getItem('users') === null ) {
    localStorage.setItem('users', JSON.stringify(list.list));
    usersData = list.list;
  } else {
    usersData = localStorage.getItem('users');
    usersData = JSON.parse(usersData);
  }

  let statusCount = status.status.length;
  usersData[index].status = usersData[index].status+1 > statusCount ? 1 : usersData[index].status+1;
  localStorage.setItem('users', JSON.stringify(usersData));
  let statusText = getStatusName(usersData[index].status);
  return (statusText);
}

export default changeUserState;