const HighlightFeature = ({ title, description }) => {
  return (
    <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', width: '45%', minWidth: '300px', textAlign: 'left' }}>
      <div style={{ 
        backgroundColor: '#ffcc00', 
        width: '50px', 
        height: '40px', 
        borderRadius: '10px', 
        flexShrink: 0 
      }}></div> {/* Placeholder Ikon Kuning */}
      <div>
        <h4 style={{ color: '#fff', margin: '0 0 5px 0', fontSize: '1.2rem' }}>{title}</h4>
        <p style={{ color: '#e3f2fd', margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>{description}</p>
      </div>
    </div>
  );
};

export default HighlightFeature;