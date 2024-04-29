import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonIcon, IonSearchbar } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import ClickCounter from './Clickcounter';
import { alarmOutline, bookOutline, calculatorOutline } from 'ionicons/icons';

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const [searchText, setSearchText] = useState<string>('');
  const [filteredContent, setFilteredContent] = useState<any[]>([]); // State to hold filtered content

  const goToCalculator = () => {
    history.push('/calculator');
  };

  // Your content array, you may need to replace this with your actual content array
  const contentArray = [
    { title: 'Clickcounter', route: '/Clickcounter' },
    { title: 'calculator', route: '/calculator' },
    { title: 'todolist', route: '/todolist' },
    // Add more items as needed
  ];

  // Function to filter content based on search text
  const filterContent = (text: string) => {
    const filtered = contentArray.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredContent(filtered);
  };

  // Handle search bar input change
  const handleSearch = (e: CustomEvent) => {
    const text = e.detail.value || '';
    setSearchText(text);
    filterContent(text);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
          {/* Add the search bar */}
          <IonSearchbar value={searchText} onIonChange={handleSearch}></IonSearchbar>
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
          {/* Display filtered content */}
          {filteredContent.map((item, index) => (
            <IonCardContent key={index}>
              <IonButton expand="block" routerLink={item.route}>
                {item.title}
              </IonButton>
            </IonCardContent>
          ))}
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
