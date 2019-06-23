# Node.JS - MongoDB basic project

## Steps

- Copy this repository
- Use the following commands:
  - `npm i` - install the dependencies
  - `npm start` - start your app
  - `npm test` - start your test
  - `npm run lint` - start the linter
- For using mongoDB write this into your `index.js`:
```js
const mongoose = require('mongoose');

mongoose.connect('Connection String', 
{ 
  useNewUrlParser: true,
  useCreateIndex: true, 
});

```

- Replace `Connection String` into your connection string.

## Contribution

### Hooks

Some hooks are trying to enforce you to use good commit messages, or branch names.

#### Commit message hook

- In your repository change directory into: `.git/hooks/`
- rename `commit-msg.sample` into `commit-msg`
- copy this code into that file: 
```sh
#!/bin/sh

prefix_regex='(fix|feat|refact)'
branch_regex='\([A-Z]{3,}-[0-9]{1,}\)'
example_message='Example commit message: feat(CICA-1): add cica to the console'

if ! egrep -q '^[^#].*' "$1"; then
	echo "Commit message can NOT be empty"
	echo "$example_message"
	exit 1
elif ! egrep -q "$prefix_regex|Merge" "$1"; then
   	echo "Missing prefix! Prefixes must be: fix | feat | refactor" 
	echo "$example_message"    
	exit 1
elif ! egrep -q "$branch_regex|Merge" "$1"; then
   	echo "Missing Jira issue key inside the parentheses. Example: (JIRA-2)" 
	echo "$example_message"    
	exit 1
fi
```

- to make sure the hook is executable write this to the terminal: `chmod +x <path to the commit-msg file>`
- try to commit something bad `cica for life`

#### Post checkout hook

- In your repository change directory into: `.git/hooks/`
- rename `post-checkout.sample` into `post-checkout`
- if NOT exists just create this file
- copy this code into that file: 
```bash
#!/bin/bash

branch_name="$(git describe --all $2)"
branch_name_regex='master|dev|staging'

if [[ $branch_name =~ ([A-Z]{3,}-[0-9]{1,})|$branch_name_regex ]]; then
    exit 0
else 
    echo "Wrong branch name: the name must contain the Jira issue key"
    echo "Rename with 'git branch -m <ISSUE-KEY>'"
fi
```

- to make sure the hook is executable write this to the terminal: `chmod +x <path to the post-checkout file>`
- try to checkout to a bad naming branch: `git checkout cica`

### Commits

- Commit prefixes should be: fix, feat, refact
- the Jira issue key must be inside pharentheses

Examples:

- `feat(GFA-1): add troop counting function`
- `fix(GFA-1): fix troop controller`
- `refact(GFA-1): refactor troop service`

### Branches

- Branch name should be the Jira issue key except master, dev, staging
- If you forget that, you have to rename it with: `git branch -m <ISSUE-KEY>`

Example branches:

- `GFA-1`
- `JIRA-32`
- `master`
- `staging`
- `dev`

