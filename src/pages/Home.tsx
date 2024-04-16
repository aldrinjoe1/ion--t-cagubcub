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
        <img alt="Profile" src=" https://imgs.search.brave.com/y5n__-Hp2gsu9DwhH0XQDWbG7YccFmn4d216OXnlJso/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2xl/YWd1ZW9mbGVnZW5k/cy9pbWFnZXMvMS8x/Ny9UZWVtb19BbG1v/c3RfSG9tZS5qcGcv/cmV2aXNpb24vbGF0/ZXN0P2NiPTIwMjIw/ODE1MTI1NDM3"></img>
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
