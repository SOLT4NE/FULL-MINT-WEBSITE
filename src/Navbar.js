import React from "react";
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
import Facebook from './assets/social-media-icons/facebook_32x32.png';
import Twitter from './assets/social-media-icons/twitter_32x32.png';
import Email from './assets/social-media-icons/email_32x32.png';

const  Navbar = ({accounts, setAccounts}) =>{
 

const isConnected = Boolean(accounts[0]);
async function connectAccount () {
    if (window.ethereum){
        const accounts = await window.ethereum.request({
            method : "eth_requestAccounts",
        });
        setAccounts(accounts);
    }
}
 <ChakraProvider>
return(

   <flex justify="space-between" align="center" padding= "30px">
   
   <Flex justify= "space-around" width="40%" padding="0 75px">
       <Link href= "https://www. facebook. com">
     <Image src={Facebook} boxSize= "42px" margin="0 15px" />
   </Link>
   <Link href= "https://www. twitter. com">
     <Image src={Twitter} boxSize= "42px" margin="0 15px" />
   </Link>
   <Link href= "https://www.gmail.com">
     <Image src={Email} boxSize= "42px" margin="0 15px" />
   </Link> </Flex>
       
  

    {/*/ right side connecte and icons/*/}

    <div>about</div>
        <div>mint</div>
        <div>team</div>

{/* connect meta mask*/}

{isConnected ? (
    <p>Connected</p>
) : (
    <button onClick={connectAccount}>Connect</button>
)}



  </flex>   
);

 </ChakraProvider>
};

export default Navbar;
