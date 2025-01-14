import React, { useState } from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonItemDivider,
  IonSearchbar,
  IonBadge
} from '@ionic/react';


//Ionic Icons
import { speedometerOutline,calculator,pencil, chatbubble, readerOutline, logoIonic,logoFirebase, logoReact, book} from 'ionicons/icons';

const cardData = [
  {
    title: 'Click Counter',
    icon: speedometerOutline,
    link: '/Clickcounter',
    tags: {
      tag1: logoIonic,
    }

  },
  {
    title: 'Calculator',
    icon: calculator,
    link: '/calculator',
    tags: {
      tag1: logoIonic,
    }
  },
  {
    title: 'To Do List',
    icon: book,
    link: '/todolist',
    tags: {
      tag1: logoIonic,
    }
  },
  {
    title: 'Quote Generator',
    icon: chatbubble,
    link: '/Qoutesgenerator',
    tags: {
      tag1: logoIonic,
    }
  },
  {
    title: 'Notes',
    icon: readerOutline,

    link: '/notes',
    tags: {
      tag1: logoIonic,
    }
  }
  
];

const Home: React.FC = () => {
  {/*Dynamic Search*/}
  const [searchTerm, setSearchTerm] = useState<string>('');
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Home</IonTitle>
            </IonToolbar>
          </IonHeader>
          
          {/*Dynamic Search*/}
          <IonSearchbar 
            value={searchTerm} 
            onIonInput={(e) => setSearchTerm(e.target.value ?? '')} 
          />
          
          {cardData
            .filter((card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((card, index) => (
              <IonCard key={index} routerLink={card.link} routerDirection='forward'>
              <IonCardHeader>
                  <IonCardTitle>
                    <IonGrid>
                      <IonRow>
                        <IonCol size="2">
                          <IonIcon className="home-card-icon" icon={card.icon} color="primary" />
                        </IonCol>
                        <IonCol size="auto">
                            <div className="home-card-title">{card.title}</div>
                            {card.tags && Object.entries(card.tags).map(([key, icon], i) => (
                              <IonIcon
                                key={i}
                                className="home-card-subicon"
                                icon={icon}
                                color="primary" // Set color as needed
                              />
                            ))}
                          </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
          ))}
        </IonContent>
      </IonPage>
    );
};
  
export default Home;
  