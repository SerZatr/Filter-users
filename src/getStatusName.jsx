import status from './status.json';
let statusArray = status.status;

/**
 * @function getStatusName 
 * @param {number} code Numeric code of status 
 * @returns statusText name of status
 */
function getStatusName(code) {
    let sIndex = statusArray.findIndex( el => el.code == code);
    let statusText =  statusArray[sIndex].statusText;
    return statusText
}

export default getStatusName;