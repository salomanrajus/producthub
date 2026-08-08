# Project: `ProductHub` — Enterprise Product Catalog

#HTML #CSS #javascript #JSON #Git #GitHub

Build a small **product catalog website** for a fictional company.

What I intend to build:
```
ProductHub
│
├── Home
├── Products
│   ├── Power Management
│   ├── Networking
│   └── Industrial Solutions
│
├── Product Details
│   ├── Product name
│   ├── Description
│   ├── Specifications
│   └── Documentation
│
└── About
```


Final repo should look like:

```
producthub/
│
├── index.html
├── products.html
├── about.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   └── products.js
│
├── data/
│   └── products.json
│
├── docs/
│   └── README.md
│
└── .gitignore
```

And Git repo should look like:

```
main
  │
  ├── develop
  │     ├── feature/header
  │     ├── feature/product-catalog
  │     ├── feature/product-details
  │     └── feature/search
  │
  └── bugfix/...
```


# Phase 1 — Create the Project

Create:

```
producthub/
```

Inside it create a basic:

```
index.html
```

Write something simple inside it:

```html
<!DOCTYPE html>
<html>
<head>
    <title>ProductHub</title>
</head>
<body>
    <h1>Welcome to ProductHub</h1>
</body>
</html>
```

Now start Git:
### Practice

```
git init
git status
```

Then configure/check your identity:

```
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

git config --global --list
```

Your notes specifically cover Git tracking beginning with `git init`, the `.git` directory, and checking repository state with `git status`.

---

# Phase 2 — Your First Commits

Create the initial structure:

```
index.html
css/style.css
js/app.js
```

Then:

```
git status
git add .
git status
git commit -m "feat: initialize ProductHub project"
```

Now add the navigation.

```
Home | Products | About
```

Commit it:

```
git add .
git commit -m "feat: add site navigation"
```

Then add:

```
products.html
```

Commit:

```
git add .
git commit -m "feat: add products page"
```

Now inspect:

```
git log
git log --oneline
```

You should have something like:

```
a821abc feat: add products page
b731def feat: add site navigation
c123abc feat: initialize ProductHub project
```

This directly practices your **checkpoint/commit** concept and `git log` commands.

---

# Phase 3 — `.gitignore`

Create:

```
.gitignore
```

Put something realistic inside:

```
.vscode/
.idea/
node_modules/
*.log
.env
.DS_Store
```

Then:

```
git add .
git commit -m "chore: add gitignore"
```

Your notes explicitly cover `.gitignore` as the mechanism for intentionally ignoring untracked files.

---
# Phase 4 — Create Your Branch Strategy

Now stop working directly on `main`.

Create:

```
git switch -c develop
```

Then:

```
git push -u origin develop
```

Your branch structure becomes:

```
main
  │
  └── develop
```

Now create your first feature:

```
git switch -c feature/header
```

Build the header.

```
--------------------------------------------------
ProductHub | Home | Products | About
--------------------------------------------------
```

Commit:

```
git add .
git commit -m "feat: add responsive header"
```

Push:

```
git push -u origin feature/header
```

Your notes specifically describe branches as alternative timelines and cover creating/switching branches with `switch -c` / `checkout -b`.

Create a PR on current branch and merge it into `develop`.

---

# Phase 5 — Practice `git diff`

Before committing your next feature, intentionally make changes.

For example, on branch `feature/header` modify:

```
index.html
```

Change:

```
<h1>Welcome to ProductHub</h1>
```

to:

```
<h1>Welcome to ProductHub — Enterprise Products</h1>
```

Now:

```
git diff
```

Then stage it:

```
git add index.html
```

Now:

```
git diff --staged
```

Don't just run the commands.

**Read the output.**

You should be able to identify:

```
- removed line
+ added line
@@ affected lines
```

That is exactly what your notes describe for `git diff` and `git diff --staged`.

---

# Phase 6 — Intentionally Unstage Something

Modify two files:

```
index.html
products.html
```

Then:

```
git add .
```

Check:

```
git status
```

Now decide:

> "I don't want to commit products.html yet."

Run:

```
git restore --staged products.html
```

Then:

```
git status
```

Expected:

```
Changes to be committed:
    index.html

Changes not staged for commit:
    products.html
```

Then commit only `index.html`.

This practices the exact **unstage** scenario in your notes.

---

# Phase 7 — Create a Real Merge Conflict

This is **very important**.

Create:

```
git switch develop
git switch -c feature/product-catalog
```

Modify:

```
products.html
```

For example:

```
<h1>Our Products</h1>
<p>Explore our enterprise solutions.</p>
```

Commit:

```
git add .
git commit -m "feat: add product catalog"
```

Push into respective branch.


Now switch to `develop`:

```
git switch develop
```

Modify the **same lines** in `products.html`:

```
<h1>Enterprise Product Catalog</h1>
<p>Discover our complete range of solutions.</p>
```

Commit:

```
git add .
git commit -m "content: update product catalog heading"
```

Again push into respective branch.

Now:

```
git merge feature/product-catalog
```

💥 Conflict.

You'll see something similar to:

```
<<<<<<< HEAD
<h1>Enterprise Product Catalog</h1>
<p>Discover our complete range of solutions.</p>
=======
<h1>Our Products</h1>
<p>Explore our enterprise solutions.</p>
>>>>>>> feature/product-catalog
```

You must manually decide what the final version should be.

Then on develop branch:

```
git add products.html
git commit -m "merge: resolve product catalog conflict"
```
and push into develop branch of the remote.

Your notes specifically explain this conflict scenario and the need to manually resolve the conflict markers before committing.

---

# Phase 8 — Practice Stash Like a Developer

Now imagine you're working on:

```
feature/search
```

Create:

```
search.js
```

Start writing:

```
function searchProducts(query) {
    // work in progress
}
```

**Do not commit it.**

Check:

```
git status
```

Now your manager says:

> "There is a production bug in the header. Fix it immediately."

But you're currently on:

```
feature/search
```

Instead of committing incomplete work:

```
git add .   // stash only works on tracked files, so `add` is must 
```

then:

```
git stash push -m "WIP: product search"
```

or 

```
git stash save "WIP: product search"
```

Check:

```
git stash list
```

Switch to:

```
git switch develop
```

Fix the header.

Commit:

```
git add .
git commit -m "fix: correct header navigation"
```

Return to search:

```
git switch feature/search
```

Recover your work:

```
git stash pop
```

This is a **much better way to learn stash** than simply running `git stash` once. Your notes describe stash specifically for temporarily saving work so you can switch context without committing incomplete changes.

---
# Phase 9 — Detached HEAD Experiment

Now deliberately break things.

Run:

```
git log --oneline
```

Take an old commit hash.

For example:

```
a821abc
```

Then:

```
git checkout a821abc
```

Run:

```
git status
```

You should see:

```
HEAD detached at a821abc
```

Now inspect the old version of the project.

Then return:

```
git switch develop
```

Your notes cover this exact detached HEAD scenario.

---

# Phase 10 — Make a Mistake and Recover With `reflog`

This is one of the most valuable exercises.

Create a branch:

```
git switch -c feature/payment-docs
```

Make a change:

```
docs/payment.md
```

Commit:

```
git add .
git commit -m "docs: add payment documentation"
```

Now accidentally delete the branch:

```
git switch develop
git branch -D feature/payment-docs
```

Pretend you panic. 😄

Find the commit:

```
git reflog
```

You'll see the previous state.

Then recover it:

```
git switch -c feature/payment-recovery <commit-hash>
```

This is where Git starts becoming genuinely useful rather than just a collection of commands.

Your notes explicitly identify `reflog` as a recovery mechanism for previous branch states and mistakes.

---

# Phase 11 — Rebase Practice

Now create:

```
git switch develop
git switch -c feature/product-search
```

Make two or three commits:

```
commit 1
feat: add search input

commit 2
feat: add search filtering

commit 3
fix: handle empty search query
```

Meanwhile, `develop` gets newer commits.

Now:

```
git switch develop
```

Add something unrelated:

```
docs/release-notes.md
```

Commit:

```
git add .
git commit -m "docs: add release notes"
```

Now return:

```
git switch feature/product-search
```

Run:

```
git rebase develop
```

Your feature commits are now replayed on top of the latest `develop`.

Conceptually:

Before:

```
develop
   A---B
        \
         C---D---E
             feature
```

After:

```
develop
   A---B---F
            \
             C'---D'---E'
                  feature
```

Your notes describe exactly this purpose: rebase moves a branch's commits on top of another branch and creates a linear history.

![ss1](https://iili.io/C4djAnS.png)

**Git Rebase** is used to move a feature branch on top of the latest changes from another branch.

### Example

Suppose we have two branches:

```text
develop
   A---B
        \
         C---D---E
             search
```

At **B**, the `develop` branch contains:

```text
app.js → 10 lines
```

The `search` branch is created from `B`.

### Before Rebase

```text
B (develop) ────> C (search) ────> D (search) ────> E (search)
```

File changes:

|Commit|`app.js`|`search.js`|
|---|--:|--:|
|**B**|10 lines|Not present|
|**C**|10 lines|3 lines|
|**D**|10 lines|5 lines|
|**E**|10 lines|7 lines|

So:

- **B:** `app.js` has 10 lines. `search.js` doesn't exist.
    
- **C:** `search.js` is created with 3 lines.
    
- **D:** `search.js` is updated from 3 → 5 lines.
    
- **E:** `search.js` is updated from 5 → 7 lines.
    

Now suppose `develop` gets a new commit **F**:

```text
develop
   A---B---F
        \
         C---D---E
                 ↑
               search
```

`F` contains the latest changes from `develop`.

### Rebase

While currently on the `search` branch:

```bash
git switch search
git rebase develop
```

Git takes the `search` commits:

```text
C → D → E
```

and **replays them on top of `F`**.

The result becomes:

```text
develop
   A---B---F
            \
             C'---D'---E'
                       ↑
                     search
```

The `'` means these are **new commits with new hashes**.

### After Rebase

|Commit|`app.js`|`search.js`|
|---|--:|--:|
|**B**|10 lines|Not present|
|**F**|10 lines + develop changes|Not present|
|**C'**|10 lines + develop changes|3 lines|
|**D'**|10 lines + develop changes|5 lines|
|**E'**|10 lines + develop changes|7 lines|

### What happened?

**B:**

```text
app.js     → 10 lines
search.js  → Not present
```

**F:**

```text
app.js     → 10 lines + changes made on develop
search.js  → Not present
```

**C':**

```text
app.js     → 10 lines + develop changes
search.js  → 3 lines
```

**D':**

```text
app.js     → 10 lines + develop changes
search.js  → 5 lines
```

**E':**

```text
app.js     → 10 lines + develop changes
search.js  → 7 lines
```

### Important Point

The `develop` changes are brought **into the `search` branch** through the rebase.

```text
develop
   B ───> F
          │
          ↓
       C' ───> D' ───> E'
                     ↑
                   search
```

So:

```text
F = latest develop
E' = latest search
```

The changes in `E'` **do not go back into `F`**.

`F` is an ancestor of `E'`:

```text
F
│
└── C'
     │
     └── D'
          │
          └── E'
```

If you eventually want the `search` changes in `develop`, you must merge the `search` branch into `develop`:

```bash
git switch develop
git merge search
```

### Easy Way to Remember

```text
git rebase develop
```

means:

> **"Take my current feature branch changes and replay them on top of the latest develop."**

```text
Before:

develop
   B
    \
     C ── D ── E
              ↑
            search


After:

develop
   B ── F
        \
         C' ── D' ── E'
                    ↑
                  search
```

**Flow:**

```text
develop changes
       ↓
      F
       ↓
rebase search onto develop
       ↓
C' → D' → E'
       ↓
search now contains latest develop changes
       ↓
merge search → develop when feature is ready
```

---

# Phase 12 — Interactive Rebase

Interactive rebase is used to **clean, modify, combine, rename, or remove commits** from your own feature branch before merging it.

It is useful when a feature branch has many small or messy commits and we want to create a **clean and meaningful commit history**.

### Why use Interactive Rebase?

Suppose our `feature/search` branch has these commits:

```text
22ccb42 update: add empty search query
6b1c811 content: add search filtering
b19f764 feat: add search
8ca6141 docs: add release notes
d43cb39 fix: logo in header
```

The search feature has 3 separate commits:

```text
b19f764 feat: add search
6b1c811 content: add search filtering
22ccb42 update: add empty search query
```

These can be combined into one clean commit:

```text
feat: add product search
```

This makes the branch history easier to understand during code review and before creating a PR.

### Start Interactive Rebase

```bash
git rebase -i HEAD~5
```

- `-i` → interactive mode
    
- `HEAD~5` → interact with the last 5 commits
    

Git opens the commits in **oldest → newest order**, which is opposite to the usual `git log --oneline` display.

### Example

`git log --oneline`:

```text
22ccb42 (HEAD -> feature/search) update: add empty search query
6b1c811 content: add search filtering
b19f764 feat: add search
8ca6141 (develop) docs: add release notes
d43cb39 fix: logo in header
```

Interactive rebase shows them as:

```text
pick d43cb39 fix: logo in header
pick 8ca6141 docs: add release notes
pick b19f764 feat: add search
pick 6b1c811 content: add search filtering
pick 22ccb42 update: add empty search query
```

### Interactive Rebase Commands

|Command|Purpose|
|---|---|
|`pick`|Keep the commit as it is|
|`reword`|Change only the commit message|
|`edit`|Stop and modify the commit's content|
|`squash`|Combine the commit with the previous commit and edit the final message|
|`drop`|Remove the commit from the history|

### ProductHub Example

We want to keep these two commits separate:

```text
d43cb39 fix: logo in header
8ca6141 docs: add release notes
```

But combine the three search commits into one:

```text
b19f764 feat: add search
6b1c811 content: add search filtering
22ccb42 update: add empty search query
```

So change the interactive rebase file to:

```text
pick d43cb39 fix: logo in header
pick 8ca6141 docs: add release notes
pick b19f764 feat: add search
squash 6b1c811 content: add search filtering
squash 22ccb42 update: add empty search query
```

Here:

```text
pick d43cb39
```

keeps the logo fix.

```text
pick 8ca6141
```

keeps the release notes.

```text
pick b19f764
```

keeps the first search commit as the main commit.

```text
squash 6b1c811
squash 22ccb42
```

combines the other two search commits into `b19f764`.

Git then asks for the final commit message.

Use:

```text
feat: add product search
```

### Before Rebase

```text
d43cb39 fix: logo in header
        ↓
8ca6141 docs: add release notes
        ↓
b19f764 feat: add search
        ↓
6b1c811 content: add search filtering
        ↓
22ccb42 update: add empty search query
```

### After Rebase

The three search commits become one:

```text
d43cb39 fix: logo in header
        ↓
8ca6141 docs: add release notes
        ↓
<new hash> feat: add product search
```

The actual search changes are still present. We are mainly **cleaning the commit history**.

### Important: Commit Hashes Change

Rebase rewrites history, so the squashed/reworded commits receive **new commit hashes**.

For example:

```text
Before:
b19f764
6b1c811
22ccb42
```

After:

```text
New hash → feat: add product search
```

Therefore, avoid interactive rebasing commits that have already been shared with other developers.

### If a Conflict Occurs

During rebase, Git may stop because of a conflict.

```bash
git status
```

Fix the conflicted file manually, then:

```bash
git add .
git rebase --continue
```

Repeat the process if more conflicts occur.

### Abort the Rebase

If the rebase becomes problematic and you want to cancel it:

```bash
git rebase --abort
```

This returns the branch to its state before the rebase started.

### Skip a Commit

If the current commit is no longer required:

```bash
git rebase --skip
```

Git skips that commit and continues the rebase.

### Interactive Rebase Flow

```text
Messy Commits
      ↓
git rebase -i HEAD~N
      ↓
Git opens the commit list
      ↓
Choose:
pick / reword / edit / squash / drop
      ↓
Save & close
      ↓
Resolve conflicts if any
      ↓
git add .
      ↓
git rebase --continue
      ↓
Clean Commit History
      ↓
Push / Create PR
```

### Easy Way to Remember

```text
pick   → Keep
reword → Rename
edit   → Modify
squash → Combine
drop   → Remove
```

**Main idea:** Interactive rebase is mainly used to **clean up your own feature branch history before merging or creating a PR**.

---

