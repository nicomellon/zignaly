export default function PhoneDetailComponent({ phone }) {
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
