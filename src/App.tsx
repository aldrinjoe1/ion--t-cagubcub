import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calculatorOutline, closeOutline, ellipse, personOutline, speedometerOutline, square, triangle } from 'ionicons/icons';
import Home from './pages/Home';
import Tab1 from './pages/Profile';
import Tab2 from './pages/Clickcounter';
import Tab3 from './pages/calculator';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import TodoList from './pages/todolist';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
        <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Profile">
            <Tab1 />
          </Route>
          <Route exact path="/Clickcounter">
            <Tab2 />
          </Route>
          <Route path="/calculator">
            <Tab3 />
          </Route>

          <Route exact path="/todolist">
            <TodoList/>
          </Route>

          <Route exact path="/">
            <Redirect to="/Profile" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">


        <IonTabButton tab="Home" href="/Home">
            <IonIcon aria-hidden="true" icon={personOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Home" href="/Home">
            <IonIcon aria-hidden="true" icon={closeOutline} />
            <IonLabel>close</IonLabel>
          </IonTabButton>
          

          <IonTabButton tab="tab1" href="/Profile">
            <IonIcon aria-hidden="true" icon={personOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>

          
   
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
