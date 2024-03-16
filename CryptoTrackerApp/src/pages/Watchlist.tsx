import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonButton, IonList, IonItemDivider } from '@ionic/react';
import React, { useState, useEffect } from 'react';

const Watchlist: React.FC = () => {
  const [cryptos, setCryptos] = useState<any[]>([]); // Array to store watchlist entries
  const [cryptoName, setCryptoName] = useState<string>(''); // Name of the cryptocurrency
  const [comment, setComment] = useState<string>(''); // Comment for the crypto

  // Load watchlist data from local storage when the component mounts, using useEffect like in the MyCryptoList page
  useEffect(() => {
    // Retrieve watchlist data from local storage
    const storedCryptos = localStorage.getItem('watchlist');

    // Check if there is data stored
    if (storedCryptos) {
      setCryptos(JSON.parse(storedCryptos));
    }
  }, []); // Empty dependency array means this effect runs only once when the component will mount

  // Function to handle adding a crypto to the watchlist
  const handleAddCrypto = () => {
    // Validate input fields and error handling alert
    if (!cryptoName || !comment) {
      alert('Please fill in all fields.');
      return;
    }

    // Create a new cryptocurrency object
    const newCrypto = {
      name: cryptoName,
      comment,
    };

    // Update the cryptos state with the new cryptocurrency
    setCryptos([...cryptos, newCrypto]);

    // Clear input fields after adding
    setCryptoName('');
    setComment('');
  };

  // Save updated watchlist data to local storage whenever the "cryptos" state changes
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(cryptos));
  }, [cryptos]); // This effect runs whenever cryptos state changes

  // This is the actual watchlist 
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Your watchlist</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItemDivider>Add Crypto to Your Watchlist</IonItemDivider>
        <IonList>
          <IonItem>
            <IonInput type="text" label="Crypto Name" value={cryptoName} onIonChange={e => setCryptoName(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="text" label="Comment" value={comment} onIonChange={e => setComment(e.detail.value!)}></IonInput>
          </IonItem>
          <IonButton expand="block" onClick={handleAddCrypto}>Add to Watchlist</IonButton>
        </IonList>

        <IonItemDivider>Your Watchlist</IonItemDivider>
        <IonList>
          {cryptos.map((crypto, index) => (
            <IonItem key={index}>
              <IonLabel>{crypto.name}</IonLabel>
              <IonLabel>{crypto.comment}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Watchlist;
