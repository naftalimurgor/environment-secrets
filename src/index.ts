import  dotenv from 'dotenv'

// read all env secrets from .env file in the project root
dotenv.config()

// acess any value from the .env file

const MNEMONIC = process.env.MNEMONIC

console.log(MNEMONIC)

// with destructing, we can read all values off our .env
// off process.env object
const {DUMMY_API_KEY, SEED_PHRASE} = process.env

console.log(DUMMY_API_KEY, SEED_PHRASE)
