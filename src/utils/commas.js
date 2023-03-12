/**
 * User: Huy
 * Usage: Format number with commas thousands seperators
 * @param {number} number 
 * @returns 
 */
const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export default numberWithCommas
