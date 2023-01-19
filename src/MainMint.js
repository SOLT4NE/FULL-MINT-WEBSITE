import React from "react"; 

import {useState } from 'react';
import { ethers, BigNumber } from 'ethers';
 import roboPunksNFT from './RoboPunksNFT.json';
 const roboPunksNFTAddress = "0xA2Bc6D1B0814AAC17B5D71a49aD1eaBE49764aeb";

 const MainMint = ({ accounts, setAccounts }) =>{

    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);
   
    async function handleMint () {
        if (window.ethereum) {


            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
              roboPunksNFTAddress,
              roboPunksNFT.abi,
               signer
            );

            try{
            const response = await contract.mint(BigNumber.from(mintAmount));
            console.log('response: ', response);
         }catch (err) {
           console.log("error: ", err)
          }
         
        }

    }

    const handleDecrement = ( ) =>{
        if (mintAmount <= 1) return;
       setMintAmount(mintAmount - 1);
         };

         const handleIncrement = ( ) =>{
            if (mintAmount >= 3) return;
           setMintAmount(mintAmount + 1);
             };

             return(
                <div>
                    <h1>CryptoRObo</h1>
                    <p>This is a mint on the testnet of eth</p>
                    {isConnected ? (
                        
                        <div>
                            <div>
                             <button onClick={handleDecrement} >-</button>  
                             <input type={Number} value={mintAmount} />
                             <button onClick={handleIncrement} >+</button>  

                </div>
                <button onClick={handleMint}>Mint Now</button>
                </div>
                    ) : (
                        <p>you must be connected to mint</p>
                    )}
                </div>
             )
    




 }

 export default MainMint;