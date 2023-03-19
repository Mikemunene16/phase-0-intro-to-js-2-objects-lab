// Write your solution in this file!
const employee = {
    name: "John",
    streetAddress: '11 Kimathi',
};

// const updateEmployeeWithKeyAndValue = function (obj, key, value) {
//     return {
//         ...obj,
//         [key]: value,
//     };
// }

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
}

// function deleteFromEmployeeByKey(obj, key) {
//     delete obj[key];
//     const newObj = { ...obj };
//     return newObj;
// }

function deleteFromEmployeeByKey(obj, key) {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}