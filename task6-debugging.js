// Debugging Challenge - Task 6
// This file contains multiple intentional errors that candidates need to identify and fix

// Function 1: Calculate total with array bounds error
function calculateTotal(items) {
    let total = 0;
    // ERROR: Loop condition should be i < items.length, not i <= items.length
    for (let i = 0; i <= items.length; i++) {
        // ERROR: No null/undefined check for items[i]
        total += items[i].price * items[i].quantity;
    }
    return total;
}

// Function 2: Process user data with missing error handling
function processUserData(users) {
    // ERROR: No validation that users is an array
    return users.map(user => {
        // ERROR: No null check for user object
        return {
            name: user.name.toUpperCase(),
            email: user.email.toLowerCase(),
            age: user.age,
            isAdult: user.age > 18
        };
    });
}

// Function 3: Async function with missing error handling
function fetchUserData(userId) {
    // ERROR: No validation of userId parameter
    fetch(`/api/users/${userId}`)
        .then(response => {
            // ERROR: No check if response is ok
            return response.json();
        })
        .then(data => {
            console.log(data);
            return data;
        })
        // ERROR: Missing .catch() for error handling
}

// Function 4: Event handler with scope issues
function setupEventListeners() {
    const buttons = document.querySelectorAll('.btn');
    // ERROR: Using var instead of let/const in loop
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            // ERROR: 'i' will always be the last value due to closure
            console.log('Button ' + i + ' clicked');
        });
    }
}

// Function 5: Memory leak potential
function createTimer() {
    // ERROR: Timer not stored for cleanup
    setInterval(() => {
        console.log('Timer running');
    }, 1000);
}

// Function 6: Race condition
let userData = null;

function loadUserData(userId) {
    fetch(`/api/users/${userId}`)
        .then(response => response.json())
        .then(data => {
            userData = data;
        });
}

function displayUserData() {
    // ERROR: No check if userData is loaded
    console.log(userData.name);
}

// Usage examples with errors
const items = [
    { price: 10, quantity: 2 },
    { price: 15, quantity: 1 },
    { price: 20, quantity: 3 }
];

const users = [
    { name: 'John', email: 'JOHN@EXAMPLE.COM', age: 25 },
    { name: 'Jane', email: 'jane@example.com', age: 17 }
];

// These calls will cause errors
console.log(calculateTotal(items));
console.log(processUserData(users));
fetchUserData(123);
setupEventListeners();
createTimer();
loadUserData(123);
displayUserData();

// Additional issues to identify:
// 1. Missing error boundaries
// 2. No input validation
// 3. Poor error handling
// 4. Memory leaks
// 5. Race conditions
// 6. Scope issues
// 7. Missing null checks
// 8. Inefficient algorithms
// 9. Security vulnerabilities
// 10. Accessibility issues
