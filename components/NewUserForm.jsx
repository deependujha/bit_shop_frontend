import React, { useState } from "react";
import { ethers } from "ethers";
import ABI from "/abi";

const NewUserForm = ({ usrAddr, setUsrAddr, setMyContract }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [delAddr, setDelAddr] = useState("");
  const connectWithMetaMask = async () => {
    if (!window.ethereum) {
      alert("Please install metamask");
    } else {
      try {
        // A Web3Provider wraps a standard Web3 provider, which is
        // what MetaMask injects as window.ethereum into each page
        let provider = new ethers.providers.Web3Provider(window.ethereum);
        // to check with which network metamask is currently connected, and show required alert
        const { chainId } = await provider.getNetwork();
        // console.log(chainId);
        if (chainId != 3) {
          alert(
            "Please connect with ropsten testnet in metamask, and refresh the page."
          );
        } else {
          // MetaMask requires requesting permission to connect users accounts
          await provider.send("eth_requestAccounts", []);

          // The MetaMask plugin also allows signing transactions to
          // send ether and pay to change state within the blockchain.
          // For this, you need the account signer...
          let signer = provider.getSigner();
          // console.log("connected with metamask");

          // creating an instance of the smart contract
          // it takes three parameters => {contract's address, abi, signer/provider}
          // provider can perform read only transactions
          // signer can perform all kind of transactions
          let contract = new ethers.Contract(
            "0x20bD9e821e257340F5E37bCD817184feb6EB1A34",
            ABI,
            signer
          );
          setMyContract(contract);
          // console.log(`contract address: ${contract.address}`);
          // console.log("Account:", await signer.getAddress());
          let usrAddress = await signer.getAddress();

          await setUsrAddr(usrAddress);
          console.log(`setting wallet address`);
        }
      } catch (e) {
        alert(`an error occurred: ${e}`);
      }
    }
  };
  const SubmitBtnClick = async (e) => {
    e.preventDefault();
    if (usrAddr == "") {
      await connectWithMetaMask();
    }
    console.log(`Clicked on submit button`);
    console.log(`name: ${name}`);
    console.log(`email: ${email}`);
    console.log(`phone: ${phone}`);
    console.log(`delivery address: ${delAddr}`);
    console.log(`walletAddress: ${usrAddr}`);
    console.log(usrAddr);
  };

  return (
    <form>
      <div className="form-group my-2">
        <label htmlFor="InputName">Name</label>
        <input
          type="text"
          onChange={(v) => {
            setName(v.target.value);
          }}
          className="form-control"
          id="InputName"
          value={name}
        />
      </div>
      <div className="form-group my-2">
        <label htmlFor="InputPhone">Phone no.</label>
        <input
          type="number"
          onChange={(v) => {
            if (phone.length < 14) setPhone(v.target.value);
          }}
          className="form-control"
          id="InputName"
          value={phone}
          maxLength="14"
        />
      </div>

      <div className="form-group my-2">
        <label htmlFor="InputEmail">Email address</label>
        <input
          type="email"
          onChange={(v) => {
            setEmail(v.target.value);
          }}
          className="form-control"
          id="InputEmail"
          aria-describedby="emailHelp"
          value={email}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group my-2">
        <label htmlFor="InputDeliveryAddress">Delivery Address</label>
        <input
          type="text"
          onChange={(v) => {
            setDelAddr(v.target.value);
          }}
          className="form-control"
          id="InputDeliveryAddress"
          value={delAddr}
        />
      </div>
      <div className="form-group my-2">
        <label htmlFor="InputWalletAddress">Wallet Address</label>
        <input
          type="text"
          className="form-control"
          id="InputWalletAddress"
          value={usrAddr}
          disabled
        />
        <small id="emailHelp" className="form-text text-muted">
          Click on 'connect with metamask' in the navigation bar.
        </small>
      </div>

      <button
        type="submit"
        className="btn btn-primary my-2"
        onClick={SubmitBtnClick}
      >
        Submit
      </button>
    </form>
  );
};

export default NewUserForm;
