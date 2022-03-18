import Web3 from "web3";

//get web3 connection
async function GetWeb3(){
    let web3;
    //get metamask web3 connection
    if(window.ethereum){
        web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    } else {
        //connect to local blockchain 
        const provider  = new Web3.providers.HttpProvider("http://127.0.0.1:7545"); // or use infura rpc url to connect to mainnet or testnet
        web3            = new Web3(provider);  
    }
    return web3;
}

export default GetWeb3;