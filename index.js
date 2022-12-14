const employee = {
    name: "Samir",
    streetAddress: ""
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;

    // return {...obj,
    // [key] = value,
    // }
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;

    // return delete ...obj[key];
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;

    // return obj[key];
}

// updateEmployeeWithKeyAndValue()

// updateEmployeeWithKeyAndValue(employee, "name", "Updated Street Address");
