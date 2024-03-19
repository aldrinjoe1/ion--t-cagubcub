import {
  //Initial Components
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard,
  IonCardContent, IonCardHeader,IonCardSubtitle, IonCardTitle
} from '@ionic/react';

// CSS
//import './profile.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
        <img alt="Profile" src=" "></img>
        <IonCardHeader>
        <IonCardTitle>Welcome to my Application</IonCardTitle>
        <IonCardSubtitle>enjoyyyyyyy</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>feel free to contact me when you have concern, lovee yahhhh:0</IonCardContent>
      
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

//
export default Home;
