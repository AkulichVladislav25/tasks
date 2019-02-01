/**
 *
 * Your task is to write a function that can take a password string
 * and parse it into actual password numbers.
 *
 * @param {string} password
 * @return {number}
 *
 * Examples
 *
 *   ' _  _  _ \n' +
 *   '  ||_||_|\n' +   => 789
 *   '  ||_| _|\n'
 *
 *   ' _  _  _ \n' +
 *   '|_ |_   |\n' +   => 567
 *   ' _||_|  |\n',
 *
 *   ' _  _  _ \n' +
 *   '|_||_ |_ \n' +   => 856
 *   '|_| _||_|\n',
 *
 */


function openCookiesRoom(password) {

    let number = 0;
    for (let i = 0; i < 3; i++) {
        let arrayDash = [0, 0, 0, 0, 0, 0, 0];
        if (password[1 + i * 3] == '_') arrayDash[0] = 1;
        if (password[10 + i * 3] == '|') arrayDash[1] = 1;
        if (password[11 + i * 3] == '_') arrayDash[2] = 1;
        if (password[12 + i * 3] == '|') arrayDash[3] = 1;
        if (password[20 + i * 3] == '|') arrayDash[4] = 1;
        if (password[21 + i * 3] == '_') arrayDash[5] = 1;
        if (password[22 + i * 3] == '|') arrayDash[6] = 1;
        let sum = 0;
        for (let j = 0; j < arrayDash.length; j++) {
            sum += arrayDash[j];
        }
        switch (sum) {
            case 7:
                number += 8 * Math.pow(10, 2 - i);
                break;
            case 6:
                if (arrayDash[2] == 0) number += 0 * Math.pow(10, 2 - i);
                if (arrayDash[3] == 0) number += 6 * Math.pow(10, 2 - i);
                if (arrayDash[4] == 0) number += 9 * Math.pow(10, 2 - i);
                break;
            case 5:
                if ((arrayDash[1] == 0) && (arrayDash[6] == 0)) number += 2 * Math.pow(10, 2 - i);
                if ((arrayDash[1] == 0) && (arrayDash[4] == 0)) number += 3 * Math.pow(10, 2 - i);
                if ((arrayDash[3] == 0) && (arrayDash[4] == 0)) number += 5 * Math.pow(10, 2 - i);
                break;
            case 4:
                number += 4 * Math.pow(10, 2 - i);
                break;
            case 3:
                number += 7 * Math.pow(10, 2 - i);
                break;
            case 2:
                number += 1 * Math.pow(10, 2 - i);
                break;
            default:
                break;
        }
    }
    return number;
}
module.exports = {
    openCookiesRoom
};