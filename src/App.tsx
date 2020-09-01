import React from 'react';
import Balance from './components/Balance';
import IncExp from './components/IncExp';
import Transactions from './components/Transactions';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import firebase from './firebase';

function App() {

  const messaging = firebase.messaging();
  messaging.requestPermission().then(() => {
    return messaging.getToken()
  }).then((token) => {
    console.log('token' , token);
  })

  return (
    <GlobalProvider>
    <div style={{ color:"white", textAlign:"center", backgroundImage:"linear-gradient(to right,#00c6ff, #0072ff)"}} className="App container-fluid">
      <h3>PWA-BUDGET-APP</h3>
      <Balance />
      <IncExp />
      <Transactions />
      <AddTransaction />
    </div>
    </GlobalProvider>
  );
}

export default App;
