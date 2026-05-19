const TestimonialCard = ({ quote, name, role}) => {
  return (
    <div style={{
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      flex: '1',
      minWidth: '300px',
      textAlign: 'left'
    }}>
      <p style={{ color: '#555', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '20px' }}>
        "{quote}"
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#ddd' }}></div>
        <div>
          <h5 style={{ margin: 0, color: '#002d72' }}>{name}</h5>
          <p style={{ margin: 0, fontSize: '0.8rem', color: '#888' }}>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;