const phones = ['Iphone 7', 'Iphone 8', 'Iphone X', 'Iphone 11', 'Iphone 12'];
const prices = [700, 800, 100, 1100, 1200];
const quantities = [10, 15, 5, 8, 12];

// =============================== Show Table Of Phones ===============================
function showPhones() {
    console.clear();
    console.log('Tables Of Phones');
    console.table(phones);
    console.table(prices);
    console.table(quantities);
}

// =============================== Add Phone ===============================
function addPhone() {
    const nameOfPhone = prompt("Enter the name of the phone:");
    const priceOfPhone = +prompt("Enter the price of the phone:");
    const qntyOfPhone = +prompt("Enter the quantity of the phone:");
    if (nameOfPhone == null || priceOfPhone == null || qntyOfPhone == null) {
        alert("Please enter valid values");
    } else {
        phones.push(nameOfPhone);
        prices.push(priceOfPhone);
        quantities.push(qntyOfPhone);
        showPhones();
    }
}

// =============================== Delete Phone ===============================
function deletePhone() {
    const indexOf = +prompt('Enter the index of the phone to delete:');
    if (indexOf === -1) {
        alert("Phone not found");
    } else {
        phones.splice(indexOf, 1);
        prices.splice(indexOf, 1);
        quantities.splice(indexOf, 1);
        showPhones();
    }
}

// =============================== Update Or Edit Phone ===============================
function updatePhone() {
    const indexOf = +prompt('Enter the index of the phone to update:');
    if (indexOf < 0) {
        alert("That's not a value. Enter a true number ,Kid.");
    } else if (indexOf >= 0) {
        let isChangeName = confirm('Do you want change name of phone?');
        if (isChangeName) {
            let nameUpdatePhone = prompt('Enter the new name of the phone:');
            phones[indexOf] = nameUpdatePhone;
        }

        let isChangePrice = confirm('Do you want change Price?');
        if (isChangePrice) {
            var nameUpdatePrice = +prompt('Enter the new price of phone:');
            prices[indexOf] = nameUpdatePrice;
        }

        let isChangeQnty = confirm('Do you want change Quantity?');
        if (isChangeQnty) {
            var nameUpdateQnty = +prompt('Enter the new quantity of the phone:');
            quantities[indexOf] = nameUpdateQnty;
        }
        showPhones();
    }
}

