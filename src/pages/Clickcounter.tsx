import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonBackButton, IonButtons } from '@ionic/react';
import './Clickcounter.css';

const ClickCounter: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>

        <IonButtons slot='start'>
              <IonBackButton defaultHref='/app/home'/>
           </IonButtons>

          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div className="counter-container">
          <h1>Count: {count}</h1>
          <div className="button-container">
            <IonButton onClick={handleIncrement} color="success">click me</IonButton>
            <IonButton onClick={handleDecrement} color="danger">reset</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ClickCounter;
