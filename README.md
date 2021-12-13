## How to manage environment secrets in Nodejs based applications


## Introduction

Ideally, we'd want to avoid:
- hard-coding API KEYs, PRIVATE KEYs, WALLET SEED phrases, we might end up pushing this sensitive data to a VCS like GitHub or Bitbucket
- exposing sensitive these credentials while in use.
- make these credentials configurable

Let's jump in.
You can find all project code here: [manage environment secrets](https://github.com/naftalimurgor/environment-secrets)
### 1. add a `.gitignore` file to root of project.

The first step would be creating a `.gitignore` file. This file will contain an entry of files and directories that we want git to ignore so we don't accidentally add the files to version control.

Add `.env` to the `.gitignore` file, like:

`Inside file: .gitignore`

```bash
.env
// other entries to be ignored by git
node_modules
```
### 2. create a .env file 

Create a file named `.env` at the root of your project.
Inside the file, add a key value pair of your credentials like this(no double quotes)

```bash
API_KE=your_value
MNEMOMIC=mnemonic
```

### 3. Read environment secrets from the .env file
- Add `dotenv` dependency to your project

```bash
 yarn add dotenv
 ```

Then from where we want to read environmnent secrets:
- Import the `dotenv` dependency:
```typescript
const dotenv = require('dotenv')
// or with ESM
import dotenv from 'dotenv'

// read and make secrets from the .env entries available:
dotenv.config()
```
Call `dotenv.config()` to make the secrets available from the `process.env` object

```typescript
const MNEMONIC = process.env.MNEMEONIC
console.log(MNEMONIC) // prints 'mnemomic`
 ```

## Summary
The goal of hiding environment secrets is to avoid exposing sensitive credentials within our applications. Care must however be taken not to add, commit and push .env files to version control as they might end up in the wrong hands.
Normally, you'd:

- create a `.gitignore` file at the root of your project
- add `.env` to the list of files to keep out of git in `.gitignore`
- use `dotenv` dependency  to read the entries inside the  `.env` file which are key=value pairs

Here's what might happen, if one accidentally pushes PRIVATE key to `Github`, a bot may grab the private key, restore your wallet and drain all your ETH or BTC in a matter of seconds. 
