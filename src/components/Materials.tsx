import './Materials.css';

export default function Materials() {
  const materials = [
    { name: "Wood", image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80&w=400" },
    { name: "Metal", image: "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?auto=format&fit=crop&q=80&w=400" },
    { name: "Acrylic", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400" },
    { name: "Leather", image: "https://images.unsplash.com/photo-1550524514-6992ce58eb16?auto=format&fit=crop&q=80&w=400" },
    { name: "Stone", image: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?auto=format&fit=crop&q=80&w=400" },
    { name: "Paper", image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=400" },
    { name: "Plastics", image: "https://images.unsplash.com/photo-1518112166137-85f9979a43dd?auto=format&fit=crop&q=80&w=400" },
    { name: "And more...", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <section className="section section-light materials">
      <div className="container">
        <div className="materials-header text-center">
          <h2>What Can You Create?</h2>
        </div>
        <div className="materials-grid">
          {materials.map((mat, index) => (
            <div key={index} className="material-card">
              <img src={mat.image} alt={mat.name} className="material-image" />
              <div className="material-overlay">
                <span className="material-name">{mat.name}</span>
                <div className="material-accent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
