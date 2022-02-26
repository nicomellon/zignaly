import { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { useAppSelector } from './hooks';
import { store } from './store';
import { setPhones } from './phonesSlice';

function PhoneListContainer() {
  return (
    <div className="phone-list">
      <ul>
        <li>Phone 1</li>
        <li>Phone 2</li>
      </ul>
    </div>
  );
}

function PhoneDetailComponent() {
  return (
    <div className="phone-detail">
      <h3>Phone name</h3>
      <p>Description</p>
      <img src="" alt="image of phone" />
      <p>Price</p>
      <p>Color</p>
    </div>
  );
}

function App() {
  const phones = useAppSelector((state) => state.phones);
  console.log({ phones });

  useEffect(() => {
    axios
      .get('http://localhost:5000/phones')
      .then((res) => store.dispatch(setPhones(res.data.phones)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Our phones</h1>
      <PhoneListContainer />
      <PhoneDetailComponent />
    </div>
  );
}

export default App;
