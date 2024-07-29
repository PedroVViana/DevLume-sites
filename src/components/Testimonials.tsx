import React from 'react';
import afagoTeste from '../assets/image/feedbacks/afago.png';
import focusTeste from '../assets/image/feedbacks/Focus.png';


const testimonialsData = [
  { name: 'Afago', imageUrl: afagoTeste },
  { name: 'Focus', imageUrl: focusTeste },
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">O Que Nossos Clientes Dizem?</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.name} className="testimonial-card">
            <div className="card-image">
              <img src={testimonial.imageUrl} alt={testimonial.name} className="image"/>
            </div>
            <div className="card-content">
              <h3 className="card-title">{testimonial.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

