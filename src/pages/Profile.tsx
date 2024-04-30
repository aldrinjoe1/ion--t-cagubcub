import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonAlert, IonButton, IonActionSheet, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './calculator.css';
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>kapoya eyyy</IonTitle>
        </IonToolbar>
        <IonCard>
      <img alt="Profile" src="https://imgs.search.brave.com/3iyNlBMwXTVllYUHtKZnoTKDTsfo6KhqeAF0E5rMM9E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM4LmFscGhhY29k/ZXJzLmNvbS8xMzAv/MTMwMzQyNS5qcGc" />
      <IonCardHeader>
        <IonCardTitle>Profile</IonCardTitle>
        <IonCardSubtitle>Aldrin Joe Q C</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Northern Buikidnon State College</IonCardContent>
      
      <IonButton id="present-alert" expand= "full">Click Me</IonButton>
      <IonAlert
        trigger="present-alert"
        header="A Short Title Is Best"
        subHeader="A Sub Header Is Optional"
        message="A message should be a short, complete sentence."
        buttons={['Action']}
      ></IonAlert>

<IonButton id="open-action-sheet" expand="full">action</IonButton>
      <IonActionSheet
        trigger="open-action-sheet"
        header="Actions"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
      ></IonActionSheet>

    </IonCard>
  
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;