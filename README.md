# Front-end Developer Assignment

## Test Overview
This test is designed to evaluate front-end development skills including HTML, CSS, JavaScript, TypeScript, Git, and problem-solving abilities. The test should be completed within 1 hour without the use of AI tools or external assistance.

## Instructions
1. Complete all tasks in the order provided
2. Document your approach and reasoning for each task
3. Fix any intentional errors you encounter
4. Provide time estimates for each section
5. Show your work and thought process

## Test Structure
- **Task 1**: HTML/CSS/JS Fundamentals (20 minutes)
- **Task 2**: TypeScript Challenge (20 minutes)
- **Task 3**: SCSS & Responsive Design (15 minutes)
- **Task 4**: Git Basics Check (10 minutes)
- **Task 5**: UI/UX Design Challenge (15 minutes)
- **Task 6**: Problem Solving & Debugging (10 minutes)
- **Task 7**: Estimation & Planning (20 minutes)

Total Time: 110 minutes

---

## Task 1: HTML/CSS/JS Fundamentals Challenge
**Time Limit: 20 minutes**

### Requirements
Create a responsive card component with the following specifications:
- Card should have a header, body, and footer
- Implement a hover effect that scales the card
- Add a button that toggles card visibility
- Use semantic HTML5 elements
- Make it responsive (mobile-first approach)

### Intentional Errors to Fix
The provided code contains several intentional errors. Identify and fix them:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card Component</title>
    <style>
        .card {
            width: 300px;
            height: 200px;
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 20px;
            margin: 20px;
            background-color: #fff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .card:hover {
            transform: scale(1.05);
            transition: transform 0.3s ease;
        }
        
        .card-header {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        
        .card-body {
            margin-bottom: 15px;
        }
        
        .card-footer {
            text-align: center;
        }
        
        .toggle-btn {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
        }
        
        @media (max-width: 768px) {
            .card {
                width: 100%;
                margin: 10px 0;
            }
        }
    </style>
</head>
<body>
    <div class="card">
        <div class="card-header">Sample Card</div>
        <div class="card-body">This is the card content. It should be responsive and have proper hover effects.</div>
        <div class="card-footer">
            <button class="toggle-btn" onclick="toggleCard()">Toggle Card</button>
        </div>
    </div>

    <script>
        function toggleCard() {
            const card = document.querySelector('.card');
            card.style.display = card.style.display === 'none' ? 'block' : 'none';
        }
    </script>
</body>
</html>
```

### Questions to Answer:
1. Identify at least 3 errors in the provided code
2. Explain how you would improve the accessibility
3. What CSS properties are missing for a smooth hover transition?
4. How would you make this component more reusable?

---

## Task 2: TypeScript Challenge
**Time Limit: 20 minutes**

### Requirements
Create a TypeScript interface and class for a User Management system with the following features:
- User interface with proper typing
- UserService class with CRUD operations
- Error handling with custom error types
- Generic type for API responses

### Code with Intentional Errors:
```typescript
interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
    isActive: boolean;
}

interface ApiResponse<T> {
    data: T;
    success: boolean;
    message?: string;
}

class UserService {
    private users: User[] = [];
    
    createUser(userData: User): ApiResponse<User> {
        if (!userData.email || !userData.name) {
            throw new Error('Name and email are required');
        }
        
        const newUser = {
            ...userData,
            id: this.users.length + 1
        };
        
        this.users.push(newUser);
        
        return {
            data: newUser,
            success: true,
            message: 'User created successfully'
        };
    }
    
    getUserById(id: number): User {
        const user = this.users.find(u => u.id === id);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
    
    updateUser(id: number, updates: Partial<User>): ApiResponse<User> {
        const userIndex = this.users.findIndex(u => u.id === id);
        if (userIndex === -1) {
            throw new Error('User not found');
        }
        
        this.users[userIndex] = { ...this.users[userIndex], ...updates };
        
        return {
            data: this.users[userIndex],
            success: true,
            message: 'User updated successfully'
        };
    }
    
    deleteUser(id: number): ApiResponse<boolean> {
        const userIndex = this.users.findIndex(u => u.id === id);
        if (userIndex === -1) {
            throw new Error('User not found');
        }
        
        this.users.splice(userIndex, 1);
        
        return {
            data: true,
            success: true,
            message: 'User deleted successfully'
        };
    }
}
```

### Questions to Answer:
1. Identify TypeScript errors and type safety issues
2. How would you improve error handling?
3. What generic constraints would you add?
4. How would you implement proper validation?

---

## Task 3: SCSS & Responsive Design
**Time Limit: 15 minutes**

### Requirements
Convert the following CSS to SCSS with:
- Nested selectors
- Variables and mixins
- Responsive breakpoints
- Component-based structure

### CSS to Convert:
```css
.navbar {
    background-color: #333;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar-brand {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
}

.navbar-nav {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.navbar-nav li {
    margin-left: 2rem;
}

.navbar-nav a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.navbar-nav a:hover {
    background-color: #555;
}

@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        padding: 1rem;
    }
    
    .navbar-nav {
        flex-direction: column;
        width: 100%;
        margin-top: 1rem;
    }
    
    .navbar-nav li {
        margin: 0.5rem 0;
    }
}
```

### Questions to Answer:
1. Create SCSS variables for colors and spacing
2. Implement a mixin for responsive breakpoints
3. How would you structure this for a component library?
4. What additional SCSS features would you use?

---

## Task 4: Git Basics Check
**Time Limit: 10 minutes**

### Scenario
You're on a feature branch `feature/user-authentication`. The `main` branch has new commits. Bring those changes into your branch and push.

### Tasks (Basics Only)

1) Check your branch and status
```bash
git branch --show-current
git status
```

2) Get latest `main`
```bash
git fetch origin
git log --oneline -3 origin/main
```

3) Merge `main` into your branch
```bash
git merge origin/main
```

If there is a conflict, you'll see markers like this in a file (example):
```txt
<<<<<<< HEAD
Your change here
=======
Change from main here
>>>>>>> origin/main
```
Keep the correct lines, remove the markers, and save the file.

4) Commit and push
```bash
git add -A
git commit -m "Merge origin/main into feature/user-authentication"
git push origin feature/user-authentication
```

### Short Questions
1) In one sentence, what does `git fetch` do?
2) In one sentence, what does `git merge origin/main` do while on your feature branch?
3) If `git push` is rejected because remote has new commits, what basic command can you run before trying to push again?

---

## Task 5: UI/UX Design Challenge
**Time Limit: 15 minutes**

### Requirements
Design a login form with the following specifications:
- Clean, modern design
- Proper form validation
- Accessibility features
- Mobile-responsive
- Loading states
- Error handling

### Design Constraints:
- Use a color scheme of your choice
- Implement proper focus states
- Add visual feedback for user actions
- Ensure WCAG 2.1 AA compliance

### Questions to Answer:
1. What accessibility features would you implement?
2. How would you handle form validation?
3. What loading states would you show?
4. How would you improve the user experience?

---

## Task 6: Problem Solving & Debugging
**Time Limit: 10 minutes**

### Debugging Challenge
The following code has multiple issues. Identify and fix them:

```javascript
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
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        });
}

// Usage
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
```

### Questions to Answer:
1. Identify all bugs in the code
2. How would you improve error handling?
3. What performance issues do you see?
4. How would you make this code more maintainable?

---

## Task 7: Estimation & Planning Exercise
**Time Limit: 20 minutes**

### Scenario
You are tasked with planning a front-end e‑commerce dashboard build. Provide realistic time estimates and an implementation plan.

### What to Produce
1. Break down the project into major tasks with estimates, dependencies, and risks
2. Justify tech choices (state management, styling, charting, testing, build tool)
3. Define phased implementation (MVP → advanced → polish/testing)
4. Identify risks and mitigations
5. Outline a quality plan (code quality, testing, performance, accessibility)

### Tip
You can use `task7-estimation.md` as your worksheet/template.

---

## Evaluation Criteria

### Technical Skills (40%)
- Code quality and best practices
- Error identification and fixing
- TypeScript proficiency
- CSS/SCSS knowledge

### Problem Solving (30%)
- Debugging approach
- Logical thinking
- Solution efficiency
- Error handling

### UI/UX Skills (20%)
- Design implementation
- Accessibility awareness
- Responsive design
- User experience consideration

### Communication (10%)
- Code documentation
- Explanation clarity
- Time estimation accuracy
- Approach justification

## Time Tracking
Please record the time spent on each task:

- Task 1: ___ minutes
- Task 2: ___ minutes  
- Task 3: ___ minutes
- Task 4: ___ minutes
- Task 5: ___ minutes
- Task 6: ___ minutes
- Task 7: ___ minutes

**Total Time: ___ minutes**

## Additional Notes
- Show your work and thought process
- Explain your approach for each task
- Document any assumptions made
- Provide alternative solutions where applicable
