# Git Basics Check - Task 4

## Scenario
You're working on a feature branch `feature/user-authentication` for a web application. Your team lead has informed you that there are new commits on the `main` branch that you need to incorporate into your feature branch before submitting your pull request.

**Current situation:**
- You're on branch `feature/user-authentication`
- You have made some commits on your feature branch
- The `main` branch has new commits from other team members
- You need to update your branch with the latest changes from `main`

## Tasks

### 1) Check your current branch and status
```bash
git branch --show-current
git status
```

### 2) Fetch the latest changes from remote
```bash
git fetch origin
git log --oneline -3 origin/main
```

### 3) Merge the latest main branch into your feature branch
```bash
git merge origin/main
```

**If there are conflicts:**
You'll see conflict markers in the affected files:
```txt
<<<<<<< HEAD
Your feature branch changes
=======
Changes from main branch
>>>>>>> origin/main
```
- Review the conflicts carefully
- Choose which changes to keep
- Remove the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
- Save the files

### 4) Stage and commit the merge
```bash
git add .
git commit -m "Merge latest main into feature/user-authentication"
```

### 5) Push your updated feature branch
```bash
git push origin feature/user-authentication
```

## Example Tasks to Complete

### Task 1: Branch Management
You need to create a new feature branch for a bug fix. Complete the following:
1. Create a new branch called `fix/login-validation` from the current main branch
2. Switch to the new branch
3. Check the current branch status

### Task 2: Commit History
You have made several commits on your feature branch. Complete the following:
1. View the last 5 commits in your current branch
2. Show the differences between your branch and main
3. Create a commit with the message "Add user authentication validation"

### Task 3: Merge Conflict Resolution
You encounter a merge conflict in a file called `auth.js`. Complete the following:
1. Identify which files have conflicts
2. Resolve the conflict by keeping both changes (yours and main's)
3. Stage the resolved files and complete the merge

## Questions to Answer
1) What does `git fetch` do and why is it important before merging?
2) What is the difference between `git merge` and `git rebase`?
3) If your push is rejected because the remote branch has new commits, what would you do?

## Time Limit: 10 minutes

## Proof of Work

### Required Documentation:
1. **Commands executed** for each example task
2. **Answers to the three questions** above
3. **Git workflow** for the main scenario

### Deliverables Checklist:
- [ ] Task 1: Branch Management - Commands executed
- [ ] Task 2: Commit History - Commands executed  
- [ ] Task 3: Merge Conflict Resolution - Commands executed
- [ ] Main Scenario: Complete workflow with commands
- [ ] Questions: Written answers to all three questions
- [ ] Git Commit: All work committed and pushed