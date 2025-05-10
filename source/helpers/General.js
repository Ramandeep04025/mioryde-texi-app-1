
import moment from "moment";


export const numberOfCharacters = (str, length) => {
    if (str.length <= length) {
        return str;
    } else {
        return str.substring(0, length) + "...";
    }
};

export function RankedNumber(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + 'st';
    }
    if (j == 2 && k != 12) {
        return i + 'nd';
    }
    if (j == 3 && k != 13) {
        return i + 'rd';
    }
    return i + 'th';
}

export function nFormatter(num) {
    const lookup = [
        { value: 1, symbol: '' },
        { value: 1e3, symbol: 'k' },
        { value: 1e6, symbol: 'M' },
        { value: 1e9, symbol: 'G' },
        { value: 1e12, symbol: 'T' },
        { value: 1e15, symbol: 'P' },
        { value: 1e18, symbol: 'E' },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
        .slice()
        .reverse()
        .find(function (item) {
            return num >= item.value;
        });
    return item
        ? (num / item.value).toFixed(1).replace(rx, '$1') + item.symbol
        : '0';
}

export function formatAmountToINR(amount) {
    if (amount) {
        return amount.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR'
        });
    }
}

export function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }

    if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

//Check Variables
export const isEmpty = (item) => {

    if (item === null) {
        return true
    }
    else if (item === '') {
        return true;
    }
    else if (item === undefined) {
        return true;
    }
    else {
        return false;
    }
}

//Check array
export const isEmptyArray = (item) => {
    if (item.length <= 0)
        return true
    else
        return false;
}

export const isEmptyObj = (item) => {
    if (Object.keys(item).length === 0)
        return true
    else
        return false;
}


export const dateFormat = (date) => {
    if (date) {
        return moment(date).format('DD MMM, YYYY');
    }
}

export const timeFormat = (time) => {
    if (time) {
        let momentTime = moment(time).format('hh:mm A');
        return momentTime
    }
}

export const timeFormat2 = (time) => {
    if (time) {
        let momentTime = moment(time, 'HH:mm a');
        let newTime = moment(momentTime._d).format('LT')
        return newTime
    }
}

export const fullDateTimeFormat = (time) => {
    if (time) {
        let momentTime = moment(time).format('YYYY-MM-DD hh:mm:ss');
        return momentTime
    }
}

export const createdDateFormat = (time) => {
    if (time) {
        let momentTime = moment(time).format('DD-MM-YYYY hh:mm:A');
        return momentTime
    }
}


export function compareDates(date1, date2) {
    if (date1 && date2) {
        const dateFormat = "YYYY-MM-DD";

        const parsedDate1 = moment(date1, dateFormat);
        const parsedDate2 = moment(date2, dateFormat);

        return parsedDate1.isAfter(parsedDate2);
    }
}

export const isObjectEmpty = (objectName) => {
    return Object.keys(objectName).length > 0
}

export const formatPhoneNumber = (phoneNumber) => {
    const x = phoneNumber && phoneNumber.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    return !x[2] ? x[1] : `(${x[1]})-${x[2]}${x[3] ? `-${x[3]}` : ''}`;
};

export function compareTWODates(startDateStr, endDateStr) {
    if (startDateStr && endDateStr) {
        const startDate = moment(startDateStr, 'YYYY-MM-DD');
        const endDate = moment(endDateStr, 'YYYY-MM-DD');

        return endDate.isAfter(startDate);
    }
}

export function formatUSPrize(number) {
    // Check if the input is a valid number
    if (number) {
        if (typeof number !== 'number' && !/^\d+(\.\d{2})?$/.test(number)) {
            throw new Error('Invalid input. Please provide a valid number.');
        }

        // Convert the number to a string with fixed decimal places
        const formattedNumber = number.toFixed(2);

        // Add commas for thousands separator
        const parts = formattedNumber.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        // Add a dollar sign and return the formatted prize
        return '$' + parts.join('.');
    }
}

export function isDateToday(inputDate) {
    if (inputDate) {
        const currentDate = moment();
        const inputDateObject = moment(inputDate, 'YYYY-MM-DD'); // Parse the input date

        return inputDateObject.isSame(currentDate, 'day');
    }
}

export function generateNextYearArray(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        return [];
    }

    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;

    const nextYearArray = [];

    for (let i = 0; i < number; i++) {
        const id = i + 1;
        const name = String(nextYear + i);
        nextYearArray.push({ id, name });
    }

    return nextYearArray;
}

export function removeQueryParams(url) {
    if (url) {
        // Find the index of the "?" character
        const questionMarkIndex = url.indexOf('?');

        // If "?" is found, remove everything to the right of it
        if (questionMarkIndex !== -1) {
            url = url.substring(0, questionMarkIndex);
        }

        return url;
    }
}

export function removeUnderscoreAndAddSpace(inputString) {
    if (inputString) {
        var stringWithSpaces = inputString.replace(/_/g, ' ');

        return stringWithSpaces;
    }
}

export function areAllParamsEmpty(obj) {
    if (obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key) && obj[key] !== null && obj[key].length !== undefined) {
                // Check if the property is an array and not empty
                if (obj[key].length > 0) {
                    return false;
                }
            } else if (obj.hasOwnProperty(key) && obj[key] !== null) {
                // Check if the property is not an array and not empty
                return false;
            }
        }
        return true;
    }
}

export function getTypeOnly(input) {
    if (input) {
        const regex = /Buy Credits: (\w+)/;
        const match = input.match(regex);

        if (match && match[1]) {
            return match[1];
        }
    }
}

