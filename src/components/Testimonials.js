import React from 'react';

const Testimonials = () => {
  return (
    <section style={styles.testimonials}>
      <h2>Отзывы наших клиентов</h2>
      <div style={styles.testimonial}>
        <p>"дети параши прислали хуйню"</p>
        <h4>- Олег З.</h4>
      </div>
      <div style={styles.testimonial}>
        <p>"говнище"</p>
        <h4>- Егор Г..</h4>
      </div>
    </section>
  );
};

const styles = {
  testimonials: {
    padding: '40px 20px',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },
  testimonial: {
    marginTop: '20px',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

export default Testimonials;