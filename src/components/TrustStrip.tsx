import { useState, useEffect, useRef } from 'react';
import './TrustStrip.css';

export default function TrustStrip() {
  const metrics = [
    { target: 40, prefix: "", suffix: "+", label: "Years of Experience" },
    { target: 90, prefix: "", suffix: "+", label: "Countries Using Trotec Machines" },
    { target: 1982, prefix: "", suffix: "", label: "Established in UAE" },
    { target: 24, prefix: "", suffix: "/7", label: "Professional Support" },
  ];

  const [counts, setCounts] = useState(metrics.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counters
          const duration = 1800; // ms
          const frames = 40;
          const interval = duration / frames;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            const progress = step / frames;
            const easeProgress = 1 - (1 - progress) * (1 - progress);

            setCounts(
              metrics.map((m) => Math.round(m.target * easeProgress))
            );

            if (step >= frames) {
              clearInterval(timer);
              setCounts(metrics.map((m) => m.target));
            }
          }, interval);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="trust-strip-section">
      <div className="container">
        <div className="trust-strip-card">
          <div className="trust-grid">
            {metrics.map((metric, index) => (
              <div key={index} className="trust-item">
                <span className="trust-number">
                  {metric.prefix}
                  {hasAnimated ? counts[index] : metric.target}
                  {metric.suffix}
                </span>
                <span className="trust-label">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
