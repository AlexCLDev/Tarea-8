import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { Route, useParams } from 'react-router';
import { Buscador } from '../components/Buscador';
import { Crear } from '../components/Crear';
import ExploreContainer from '../components/ExploreContainer';
import { Home } from '../components/Home';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [listadoState, setListadoState] = useState([])
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar> 
      </IonHeader>

      <IonRouterOutlet className='rutas'>
            <Route path="/page/home" exact={true}>
              <Home listadoState={listadoState} setListadoState={setListadoState} />
            </Route>
            <Route path="/" exact={true}>
            <Home listadoState={listadoState} setListadoState={setListadoState} />
            </Route>
            <Route path="/page/agregar" exact={true}>
            <Crear setListadoState={setListadoState}/>
            </Route>
            <Route path="/page/buscar" exact={true}>
            <Buscador listadoState={listadoState} setListadoState={setListadoState}/>
            </Route>
            

            
          </IonRouterOutlet>
    </IonPage>
  );
};

export default Page;
