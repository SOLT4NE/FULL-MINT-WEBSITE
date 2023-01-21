import React from "react";
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
 
return(

 
   <div className="navbar">
   
   <div className="icon">
       <a href= "https://www. facebook. com">
     <img src={Facebook} className="fb" alt=""/>
   </a>
   <a href= "https://www. twitter. com">
     <img src={Twitter} className="tw"  alt=""/>
   </a>
   <a href= "https://www.gmail.com">
     <img src={Email} className="em" alt=""/>
   </a>
    </div>
    {/*/ right side connecte and icons/*/}
<div className="nav">
    <div>about</div>
        <div>mint</div>
        <div>team</div>

{/* connect meta mask*/}

{isConnected ? (
    <p>Connected</p>
) : (
    <button onClick={connectAccount}>Connect</button>
)}

</div>

  </div>   
);


};

export default Navbar;
