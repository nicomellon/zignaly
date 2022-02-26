export default function PhoneListContainer({ phones, setShowDetail }) {
  return (
    <div className="phone-list">
      <ul>
        {phones.map((phone, index) => (
          <li key={index}>
            <p onClick={() => setShowDetail(phone)}>{phone.name}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
