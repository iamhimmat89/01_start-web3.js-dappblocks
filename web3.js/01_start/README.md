# How to connect react dapp to ethereum blockchain?

This project was bootstrapped with [Create React App]. This will connect to the ethereum blockchain and fetch account ETH balance.

## Available Scripts

In the project directory, you can run:

### `npm install`

Install all packages from packeage.json. 

### `npm start`

Launches the app into the browser at http://localhost:3000/

## Code internals

In this project, we will connect to the ethereum blockchain using web3.js, infura and metamask

### Connect to the blockchain using web3.js and infura

Get your own infura rpc urls. And add http rpc url into web3.component.js  

### Connect to the blockchain using web3.js and metamask

Add window.ethereum code into web3.component.js to connect with the browser metamask. 

