import './WhySpeedy.css';

export default function WhySpeedy() {
  const features = [
    {
      num: "01",
      title: "High Productivity",
      desc: "Designed to help businesses increase production efficiency."
    },
    {
      num: "02",
      title: "Reliable Engineering",
      desc: "First-class components and dependable mechanical performance."
    },
    {
      num: "03",
      title: "Smarter Workflow",
      desc: "Ruby® software provides a streamlined workflow from idea to finished product."
    },
    {
      num: "04",
      title: "Lower Maintenance",
      desc: "Reliable systems designed for maximum runtime and minimum maintenance."
    }
  ];

  return (
    <section className="section why-speedy">
      <div className="container">
        <div className="why-header">
          <h2>Why Choose Speedy?</h2>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-block">
              <span className="feature-number">{feature.num}</span>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
