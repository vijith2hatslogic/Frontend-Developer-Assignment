// TypeScript Challenge - Task 2
// This file contains intentional errors that candidates need to identify and fix

// Missing proper interface definitions
interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
    isActive: boolean;
    // Missing proper validation types
}

// Missing generic constraints
interface ApiResponse<T> {
    data: T;
    success: boolean;
    message?: string;
    // Missing error handling types
}

// Missing proper error types
class UserService {
    private users: User[] = [];
    
    // Missing proper validation
    createUser(userData: User): ApiResponse<User> {
        if (!userData.email || !userData.name) {
            throw new Error('Name and email are required');
        }
        
        // Missing proper ID generation
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
    
    // Missing proper error handling
    getUserById(id: number): User {
        const user = this.users.find(u => u.id === id);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
    
    // Missing proper type safety
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
    
    // Missing proper return type
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

// Missing proper usage examples
// Missing error handling examples
// Missing proper type guards
