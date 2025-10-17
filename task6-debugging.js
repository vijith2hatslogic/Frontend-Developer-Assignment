// Debugging Challenge - Task 6

function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i <= items.length; i++) {
        total += items[i].price * items[i].quantity;
    }
    return total;
}

function processUserData(users) {
    return users.map(user => {
        return {
            name: user.name.toUpperCase(),
            email: user.email.toLowerCase(),
            age: user.age,
            isAdult: user.age > 18
        };
    });
}

function fetchUserData(userId) {
    fetch(`/api/users/${userId}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            return data;
        });
}

function setupEventListeners() {
    const buttons = document.querySelectorAll('.btn');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            console.log('Button ' + i + ' clicked');
        });
    }
}

function createTimer() {
    setInterval(() => {
        console.log('Timer running');
    }, 1000);
}

let userData = null;

function loadUserData(userId) {
    fetch(`/api/users/${userId}`)
        .then(response => response.json())
        .then(data => {
            userData = data;
        });
}

function displayUserData() {
    console.log(userData.name);
}

// Usage examples
const items = [
    { price: 10, quantity: 2 },
    { price: 15, quantity: 1 },
    { price: 20, quantity: 3 }
];

const users = [
    { name: 'John', email: 'JOHN@EXAMPLE.COM', age: 25 },
    { name: 'Jane', email: 'jane@example.com', age: 17 }
];

console.log(calculateTotal(items));
console.log(processUserData(users));
fetchUserData(123);
setupEventListeners();
createTimer();
loadUserData(123);
displayUserData();

// PROOF OF WORK - Complete the following:
/*
1. BUGS FIXED (List 5 main issues):
- Bug 1: 
- Bug 2: 
- Bug 3: 
- Bug 4: 
- Bug 5: 

2. FIXES IMPLEMENTED:
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 

3. TESTING:
- [ ] 
- [ ] 
- [ ] 
- [ ] 

4. GIT COMMIT:
- [ ] Committed: git commit -m "Task 6: Fixed JavaScript bugs"
*/
