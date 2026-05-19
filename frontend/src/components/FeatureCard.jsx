const FeatureCard = ({ title, description}) => {
  return (
    <div style={{
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      textAlign: 'center',
      flex: '1',
      minWidth: '250px'
    }}>
      <div style={{ backgroundColor: '#f0f7ff', height: '150px', borderRadius: '15px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Placeholder untuk gambar ilustrasi */}
        <span style={{ color: '#007bff', fontSize: '0.9rem' }}>[ Gambar {title} ]</span>
      </div>
      <h3 style={{ color: '#002d72', fontSize: '1.2rem', marginBottom: '10px' }}>{title}</h3>
      <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.5' }}>{description}</p>
    </div>
  );
};

export default FeatureCard;