# Git Basics Check - Task 4

## Scenario
You're on a feature branch `feature/user-authentication`. The `main` branch has new commits. Bring those changes into your branch and push.

## Tasks (Basics Only)

### 1) Check your branch and status
```bash
git branch --show-current
git status
```

### 2) Get latest `main`
```bash
git fetch origin
git log --oneline -3 origin/main
```

### 3) Merge `main` into your branch
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

### 4) Commit and push
```bash
git add -A
git commit -m "Merge origin/main into feature/user-authentication"
git push origin feature/user-authentication
```

## Short Questions
1) In one sentence, what does `git fetch` do?
2) In one sentence, what does `git merge origin/main` do while on your feature branch?
3) If `git push` is rejected because remote has new commits, what basic command can you run before trying to push again?

## Evaluation
- Shows correct basic commands (status, fetch, merge, resolve, commit, push)
- Can explain conflicts at a high level
- Clear, short commit message

## Time Limit: 5 minutes

## Deliverables
- Commands run (or what you would run)
- Short answers to the 3 questions
- Successful push (or explanation of what you'd do)