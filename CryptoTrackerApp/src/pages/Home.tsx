import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { cashOutline, walletOutline } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  const [totalWorth, setTotalWorth] = useState<number>(0);

 /*useEffect(() => {
    // Calculate total worth based on the crypto list page
    const cryptoList = JSON.parse(localStorage.getItem('cryptos') || '[]');
    const total = cryptoList.reduce((acc, crypto) => acc + crypto.totalValue, 0);
    setTotalWorth(total);
  }, []);
*/
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary"> 
        </IonToolbar>
      </IonHeader>
      <IonContent className="content-home"> 
        <div className="content-wrapper">
          <h1>Welcome to the Crypto Tracker App!</h1>
          <IonIcon icon={walletOutline} size="large" /> 
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;


//   To add later the total worth row (now it's not functioning properly) :   <h2><IonIcon icon={cashOutline} size="large" /> Your total crypto worth is: ${totalWorth.toFixed(2)}</h2>    
