import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { useAppSelector } from './hooks';
import { store } from './store';
import { setPhones } from './phonesSlice';

function PhoneListContainer({ phones, setShowDetail }) {
  return (
    <div className="phone-list">
      <ul>
        {!phones && <p>loading</p>}
        {phones &&
          phones.map((phone, index) => (
            <li key={index} onClick={() => setShowDetail(phone)}>
              {phone.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

function PhoneDetailComponent({ phone }) {
  console.log(phone);
  if (!phone) return <div className="phone-detail">Select a phone</div>;

  return (
    <div className="phone-detail">
      <h3>{phone.name}</h3>
      <p>{phone.description}</p>
      <img src={phone.image} alt="image of phone" />
      <p>${phone.price} USD</p>
      <p>{phone.color}</p>
    </div>
  );
}

function App() {
  const phones = useAppSelector((state) => state.phones);
  console.log({ phones });

  const [showDetail, setShowDetail] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/phones')
      .then((res) => store.dispatch(setPhones(res.data.phones)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Our phones</h1>
      <PhoneListContainer phones={phones} setShowDetail={setShowDetail} />
      <PhoneDetailComponent phone={showDetail} />
    </div>
  );
}

export default App;
