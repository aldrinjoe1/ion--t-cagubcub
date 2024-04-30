import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonIcon, IonSearchbar } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import ClickCounter from './Clickcounter';
import { alarmOutline, bookOutline, calculatorOutline } from 'ionicons/icons';

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
          {/* Add the search bar */}
          <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} placeholder="Search"></IonSearchbar>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
          <img src="https://imgs.search.brave.com/y5n__-Hp2gsu9DwhH0XQDWbG7YccFmn4d216OXnlJso/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2xl/YWd1ZW9mbGVnZW5k/cy9pbWFnZXMvMS8x/Ny9UZWVtb19BbG1v/c3RfSG9tZS5qcGcv/cmV2aXNpb24vbGF0/ZXN0P2NiPTIwMjIw/ODE1MTI1NDM3" alt="Profile" />
          <IonCardHeader>
            <IonCardTitle>Welcome to my Application</IonCardTitle>
            <IonCardSubtitle>canceran naaa</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Feel free to contact me when you have concerns. Love yahhhh:)</IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardContent>
            <IonCard routerLink='/Clickcounter' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <IonIcon icon={alarmOutline} slot="start" />
              <IonCardTitle>Clickcounter</IonCardTitle>
            </IonCard>
          </IonCardContent>

          <IonCardContent>
            <IonCard routerLink='/calculator' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <IonIcon icon={calculatorOutline} slot="start" />
              <IonCardTitle>Calculator</IonCardTitle>
            </IonCard>
          </IonCardContent>

          <IonCardContent>
            <IonCard routerLink='/todolist' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <IonIcon icon={bookOutline} slot="start" />
              <IonCardTitle>Todolist</IonCardTitle>
            </IonCard>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;