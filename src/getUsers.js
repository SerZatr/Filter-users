import paginate from './paginate';
import searchUsers from './searchUsers';
/**
 * @function getUsers returns array of users, that contain some string in names from page*5 index to page*5+5 index
 * @param {Array} data data from list.json
 * @param {string} searchString name will contain this string
 * @param {number} page selected page
 * @returns 
 */
function getUsers(data, searchString, page) {
    let users = searchUsers(data, searchString);
    users = paginate(users);
    users = users[page];
    return users;
  }

  export default getUsers;