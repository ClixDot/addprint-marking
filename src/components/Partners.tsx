import './Partners.css';

export default function Partners() {
  const partners = ["Trotec", "Trodat", "Taymar", "Neotec", "Rayjet"];

  return (
    <section className="partners">
      <div className="container">
        <div className="partners-header">
          <h2>Trusted Technology. Proven Brands.</h2>
        </div>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo">
              {/* Fallback to text if we don't have SVGs, styled minimally */}
              <span className="partner-name">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
