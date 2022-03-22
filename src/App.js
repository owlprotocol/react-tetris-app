import React, { useState } from 'react';
import Tetris from './components/Tetris';
import Connect from './pages/Connect'

function App() {

  const [provider, setProvider] = useState();
  const [connected, setConnected] = useState(false)
  const [address, setAddress] = useState(null)

  return (
    <>
      {connected ? <Tetris provider={provider} address={address} /> : <Connect setProvider={setProvider} setAddress={setAddress} setConnected={setConnected} />}
    </>
  );
}

export default App;

