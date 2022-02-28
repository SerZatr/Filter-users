import UserRow from "./UserRow";

/**
 * @param {array} data users data from list.json
 * @param {string} searchString filter of search 
 * @returns users Array
 */
function searchUsers(data, searchString) {
    let users = [];
    let key = 0;
    for (let id in data) {
      let user = data[id];
      let fullName = user.lastName + ' ' + user.firstName + ' ' + user.patronymic;
      if(fullName.includes(searchString)) {
        users.push(
          <div key={key}>
            <UserRow
              fullName={fullName} 
              id={id} status={user.status} 
              key={user.lastName + key} 
            />
          </div>
        );
          key++;
      }
    }
    return users;
  }

  export default searchUsers;