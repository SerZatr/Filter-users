/**
 * @function paginate splits the users array on pages
 * @param {Array} users 
 * @returns paginated arrays of users in array of pages
 */
function paginate(users) {
    let paginated = [];
    let pagesCount = Math.ceil(users.length/5);
    for ( let pages=0; pages<pagesCount; pages++)
      {
        paginated.push([]);
        for (let i=0; i<5; i++) {
          let index = pages*5 + i;
          if (index >= users.length) break;
          paginated[pages].push(users[index]);
        }
      }
      return paginated;
  }

  export default paginate;