import './LaserSolutions.css';

export default function LaserSolutions() {
  const solutions = [
    {
      title: "Laser Engraving",
      description: "Precision engraving for professional applications.",
      image: "/images/trotec_laser_engraving_action.png"
    },
    {
      title: "Laser Cutting",
      description: "Clean, accurate and efficient cutting.",
      image: "/images/trotec_laser_cutting_acrylic.png"
    },
    {
      title: "Industrial Marking & Automation",
      description: "Permanent high-quality marking for industrial products, robotics, and automotive production lines.",
      image: "/images/trotec_laser_solutions_robotic.png"
    }
  ];

  return (
    <section className="section laser-solutions">
      <div className="container">
        <div className="solutions-header text-center">
          <h2>Laser Technology Built for Every Application</h2>
          <p>We provide advanced laser engraving, laser cutting and industrial marking solutions across multiple industries.</p>
        </div>
        
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <div className="solution-image-container">
                <img src={solution.image} alt={solution.title} className="solution-image" />
                <div className="solution-overlay"></div>
              </div>
              <div className="solution-content">
                <div className="solution-indicator"></div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
