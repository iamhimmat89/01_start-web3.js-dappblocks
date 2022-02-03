import React, {useState} from "react";
import GetWeb3 from "./web3.component";

let web3;
function Main(props){
    //set params
    const [etherBalance, setEtherBalance] = useState("");
    const [account, setAccount]           = useState("");

    //get account function
    async function getAccount(){
        web3            = await GetWeb3();
        const accounts  = await web3.eth.getAccounts();
        setAccount(accounts[0]);
    }
    
    //get balance function
    async function getBalance(){
        //return in wei
        const balance       = await web3.eth.getBalance(account);
        //convert wei to ETH
        const ethBalance    = web3.utils.fromWei(balance.toString(), 'Ether'); 
        setEtherBalance(ethBalance);
    }

    getAccount();
    getBalance();
    
    return (
        <div>
            <div>
                Welcome to DappBlocks!
            </div>
            <div>
                {account} : {etherBalance} ETH
            </div>
        </div>
    )
}

export default Main;