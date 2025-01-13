
import { generateMnemonic } from 'bip39';
import { useState } from 'react';
import './App.css'
import { EthWallet } from './component/ETHcomponent/EthWallet';
import { SolanaWallet } from './component/solanaComponent/SolanaWallet';

function App() {
  const [mnemonic, setMnemonic] = useState("");
 const genMnemonic=async()=>{
  const mn = await generateMnemonic();
  setMnemonic(mn)
 }
  return (
    <>
    <input type="text" value={mnemonic}></input>
     <button onClick={(genMnemonic)}>generateMnemonic</button>
     <EthWallet mnemonic={mnemonic}/>
     <SolanaWallet mnemonic={mnemonic}/>
    </>
  )
}

export default App
