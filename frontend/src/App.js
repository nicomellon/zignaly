import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { useAppSelector } from './hooks';
import { store } from './store';
import { setPhones } from './phonesSlice';

function Spinner() {
  return <p>loading</p>;
}

function PhoneListContainer({ phones, setShowDetail }) {
  return (
    <div className="phone-list">
      <ul>
        {phones.map((phone, index) => (
          <>
            <li key={index} onClick={() => setShowDetail(phone)}>
              {phone.name}
            </li>
            <hr />
          </>
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
      <img src={phone.image} alt="phone from database" />
      <div>
        <div>
          <h3>
            {phone.name} <span>({phone.color})</span>
          </h3>
          <em>{phone.description}</em>
        </div>
        <div>
          <p>From</p>
          <b>${phone.price} USD</b>
        </div>
      </div>
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
