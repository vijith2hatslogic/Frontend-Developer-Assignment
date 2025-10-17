// TypeScript Challenge - Task 2

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

// PROOF OF WORK - Complete the following:
/*
1. TYPESCRIPT ERRORS FIXED (List 3 main issues):
- Error 1: 
- Error 2: 
- Error 3: 

2. IMPROVEMENTS MADE:
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 

3. TESTING:
- [ ] 
- [ ] 
- [ ] 

4. GIT COMMIT:
- [ ] Committed: git commit -m "Task 2: Improved TypeScript code"
*/
