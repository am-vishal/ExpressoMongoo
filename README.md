# Git reset --soft and Git reset --hard

Let's say you have the following commit history:

```bash
A - B - C (master)
```

You're currently on the `master` branch, which is pointing to the latest commit `C`. You realize that you made a mistake in commit `B`, and you want to undo that change.

## Git reset --soft

To undo the change in commit `B` using `git reset --soft`, you would run the following command:

```bash
git reset --soft B
```

This moves the master branch pointer to commit B, and sets the staging area and the working directory to be the same as they were when you made commit B. This means that the changes from commit C are still present in the staging area and the working directory, and you can review them and re-commit them as needed.

```
A - B - C (master)
    ↑
   HEAD
```

To commit the changes from commit C, you would use git commit:

```bash
 git commit -m "Commit message"
```

This creates a new commit that contains the changes from commit C, and updates the master branch pointer to point to the new commit:

```
A - B - C (origin)
    \
     C' (master)
```

Note that `C'` is a new commit with a different commit ID than `C`, because it contains a different history of changes.

## Git reset --hard

To undo the change in commit `B` using `git reset --hard`, you would run the following command:

```bash
 git reset --hard B
```

This moves the `master` branch pointer to commit `B`, and discards any changes in the staging area and the working directory that were made after commit `B`. This means that the changes from commit `C` are permanently lost.

```bash
A - B (master)
    \
     C
```

In this case, the commit `C` is still present in the repository's history, but it's no longer part of the `master` branch. If you want to access the changes from commit `C`, you can check out the commit ID directly, or create a new branch that starts at commit `C`.
