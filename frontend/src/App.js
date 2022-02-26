import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { useAppSelector } from './hooks';
import { store } from './store';
import { setPhones } from './phonesSlice';
import {
  Spinner,
  PhoneListContainer,
  PhoneDetailComponent,
} from './components';

function App() {
  const phones = useAppSelector((state) => state.phones);
  const [showDetail, setShowDetail] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/phones')
      .then((res) => store.dispatch(setPhones(res.data.phones)))
      .catch((err) => console.log(err));
  }, []);

  if (!phones) return <Spinner />;

  return (
    <div className="App">
      <h1 className="app-title">Our phones</h1>
      <PhoneListContainer phones={phones} setShowDetail={setShowDetail} />
      <PhoneDetailComponent phone={showDetail} />
    </div>
  );
}

export default App;
