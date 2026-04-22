import React, { useState, useEffect } from 'react';
import { ChevronDown, Star, Clock, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function SalonWebsite() {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ObserverElement = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = React.useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      }, { threshold: 0.1 });

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

    return (
      <div
        ref={ref}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: `all 0.8s ease-out ${delay}ms`,
        }}
      >
        {children}
      </div>
    );
  };

  const services = [
    { name: 'Haircut & Style', price: '$45-75', icon: '✂️', desc: 'Professional cuts and styling' },
    { name: 'Color Treatment', price: '$80-200', icon: '🎨', desc: 'Full color, highlights, balayage' },
    { name: 'Hair Extensions', price: '$150-400', icon: '💇', desc: 'Premium extensions applied' },
    { name: 'Blow Dry Bar', price: '$35-60', icon: '💨', desc: 'Styling & finishing only' },
    { name: 'Keratin Treatment', price: '$120-180', icon: '✨', desc: 'Smoothing & conditioning' },
    { name: 'Bridal Styling', price: '$150-250', icon: '💒', desc: 'Wedding day hair' },
  ];

  const team = [
    {
      name: 'Sarah Mitchell',
      title: 'Master Stylist & Owner',
      bio: '15+ years of experience in color theory and cutting techniques.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop',
    },
    {
      name: 'Emma Chen',
      title: 'Senior Colorist',
      bio: 'Specializing in balayage and dimensional color treatments.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop',
    },
    {
      name: 'Jessica Rodriguez',
      title: 'Styling Specialist',
      bio: 'Expert in extensions, updos, and bridal styling.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop',
    },
  ];

  const testimonials = [
    {
      name: 'Amanda K.',
      text: 'Sarah completely transformed my hair! The color is exactly what I wanted.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      name: 'Michelle T.',
      text: 'Best salon experience ever. Emma is so talented and made me feel so comfortable.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      name: 'Lisa W.',
      text: 'My wedding hair was absolutely stunning. Thank you Jessica!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
  ];

  const blogPosts = [
    {
      title: 'Summer Hair Care: Beat the Heat',
      excerpt: 'Learn how to protect your hair during hot months...',
      date: 'June 15, 2024',
      image: 'https://images.unsplash.com/photo-1516733725302-3917f38b13ca?w=400&h=250&fit=crop',
      category: 'Tips',
    },
    {
      title: 'Color Trends for Fall 2024',
      excerpt: 'Discover the hottest hair color trends this season...',
      date: 'August 20, 2024',
      image: 'https://images.unsplash.com/photo-1507531173827-b91e0f8a4ab0?w=400&h=250&fit=crop',
      category: 'Trends',
    },
    {
      title: 'DIY Hair Mask Recipes',
      excerpt: 'Deep conditioning treatments you can make at home...',
      date: 'July 10, 2024',
      image: 'https://images.unsplash.com/photo-1522338503532-48f68e894c00?w=400&h=250&fit=crop',
      category: 'Wellness',
    },
  ];

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: '#2d2d2d' }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #fafafa; }
        
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@300;400;500;600&display=swap');
        
        .hero-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #ffffff 0%, #f5f3f0 50%, #e8e6e3 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        
        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        
        .hero-text h1 {
          font-family: 'Playfair Display', serif;
          font-size: 64px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 20px;
          line-height: 1.1;
        }
        
        .hero-text p {
          font-size: 18px;
          color: #666;
          margin-bottom: 30px;
          font-weight: 300;
          line-height: 1.6;
        }
        
        .cta-button {
          display: inline-block;
          padding: 14px 40px;
          background: #8b7d7a;
          color: white;
          border: none;
          border-radius: 30px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .cta-button:hover {
          background: #6b5d5a;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(139, 125, 122, 0.2);
        }
        
        .hero-image {
          position: relative;
          height: 500px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }
        
        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .chevron-bounce {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }
        
        .section {
          padding: 100px 40px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 60px;
          text-align: center;
          color: #1a1a1a;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }
        
        .service-card {
          background: white;
          padding: 40px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
        }
        
        .service-icon {
          font-size: 48px;
          margin-bottom: 15px;
        }
        
        .service-card h3 {
          font-size: 20px;
          margin-bottom: 10px;
          color: #1a1a1a;
        }
        
        .service-card .price {
          color: #d4a574;
          font-weight: 600;
          font-size: 18px;
          margin-bottom: 10px;
        }
        
        .service-card p {
          color: #999;
          font-size: 14px;
        }
        
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 60px;
        }
        
        .gallery-item {
          position: relative;
          height: 300px;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .gallery-item:hover img {
          transform: scale(1.05);
        }
        
        .testimonials-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        
        .testimonial {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
        }
        
        .testimonial-header {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
          align-items: flex-start;
        }
        
        .testimonial-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
        }
        
        .testimonial-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .testimonial-info h4 {
          margin: 0;
          color: #1a1a1a;
        }
        
        .stars {
          color: #d4a574;
          font-size: 14px;
        }
        
        .testimonial-text {
          color: #666;
          line-height: 1.6;
          font-style: italic;
        }
        
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }
        
        .team-member {
          text-align: center;
        }
        
        .team-image {
          width: 100%;
          height: 350px;
          border-radius: 15px;
          overflow: hidden;
          margin-bottom: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .team-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .team-member:hover .team-image img {
          transform: scale(1.05);
        }
        
        .team-member h3 {
          font-size: 22px;
          color: #1a1a1a;
          margin-bottom: 5px;
        }
        
        .team-member .title {
          color: #d4a574;
          font-weight: 600;
          margin-bottom: 15px;
        }
        
        .team-member p {
          color: #999;
          line-height: 1.6;
        }
        
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }
        
        .blog-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .blog-card:hover {
          transform: translateY(-5px);
        }
        
        .blog-image {
          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        
        .blog-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .blog-card:hover .blog-image img {
          transform: scale(1.05);
        }
        
        .blog-content {
          padding: 30px;
        }
        
        .blog-category {
          display: inline-block;
          background: #f0ebe8;
          color: #8b7d7a;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 12px;
          margin-bottom: 10px;
        }
        
        .blog-content h3 {
          font-size: 20px;
          color: #1a1a1a;
          margin-bottom: 10px;
          line-height: 1.4;
        }
        
        .blog-date {
          color: #999;
          font-size: 13px;
          margin-bottom: 10px;
        }
        
        .blog-content p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 15px;
        }
        
        .read-more {
          color: #8b7d7a;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        
        .read-more:hover {
          color: #6b5d5a;
        }
        
        .footer {
          background: #2d2d2d;
          color: white;
          padding: 60px 40px;
          margin-top: 100px;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }
        
        .footer-section h3 {
          margin-bottom: 20px;
          font-size: 18px;
        }
        
        .footer-links {
          list-style: none;
        }
        
        .footer-links li {
          margin-bottom: 10px;
        }
        
        .footer-links a {
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-links a:hover {
          color: #d4a574;
        }
        
        .contact-info {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
          color: #ccc;
        }
        
        .social-icons {
          display: flex;
          gap: 15px;
        }
        
        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          background: #d4a574;
          color: white;
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 30px;
          text-align: center;
          color: #999;
        }
        
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        
        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
        }
        
        .nav-links {
          display: flex;
          gap: 40px;
          list-style: none;
        }
        
        .nav-links a {
          text-decoration: none;
          color: #666;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        .nav-links a:hover {
          color: #d4a574;
        }
        
        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
          }
          
          .hero-text h1 {
            font-size: 40px;
          }
          
          .nav-links {
            gap: 20px;
            font-size: 14px;
          }
          
          .nav-links a {
            font-size: 12px;
          }
          
          .section-title {
            font-size: 36px;
          }
        }
      `}</style>

      <nav className="nav">
        <div className="nav-logo">Luxe Hair Studio</div>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Transform Your Hair, Transform Yourself</h1>
            <p>Premium hair styling and color treatments designed to bring out your best self. Experience luxury at every visit.</p>
            <button className="cta-button">Book Your Appointment</button>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1633159720006-5ec9a58b90dc?w=600&h=700&fit=crop"
              alt="Professional hair styling"
            />
          </div>
        </div>
        <div className="chevron-bounce">
          <ChevronDown size={32} color="#8b7d7a" />
        </div>
      </section>

      <section id="services" className="section">
        <ObserverElement>
          <h2 className="section-title">Our Services</h2>
        </ObserverElement>
        <div className="services-grid">
          {services.map((service, i) => (
            <ObserverElement key={i} delay={i * 100}>
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p className="price">{service.price}</p>
                <p>{service.desc}</p>
              </div>
            </ObserverElement>
          ))}
        </div>
      </section>

      <section id="gallery" className="section">
        <ObserverElement>
          <h2 className="section-title">Recent Work</h2>
        </ObserverElement>
        <div className="gallery">
          <ObserverElement delay={0}>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1597647521957-a0d826a4e11c?w=400&h=400&fit=crop" alt="Hair style 1" />
            </div>
          </ObserverElement>
          <ObserverElement delay={100}>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&h=400&fit=crop" alt="Hair style 2" />
            </div>
          </ObserverElement>
          <ObserverElement delay={200}>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1591267990351-8dde41ae4ac7?w=400&h=400&fit=crop" alt="Hair style 3" />
            </div>
          </ObserverElement>
          <ObserverElement delay={300}>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1507893590154-7192e07a4a1c?w=400&h=400&fit=crop" alt="Hair style 4" />
            </div>
          </ObserverElement>
          <ObserverElement delay={400}>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1535495066739-95ce58a28447?w=400&h=400&fit=crop" alt="Hair style 5" />
            </div>
          </ObserverElement>
          <ObserverElement delay={500}>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=400&fit=crop" alt="Hair style 6" />
            </div>
          </ObserverElement>
        </div>
      </section>

      <section className="section">
        <ObserverElement>
          <h2 className="section-title">What Clients Say</h2>
        </ObserverElement>
        <div className="testimonials-container">
          {testimonials.map((testimonial, i) => (
            <ObserverElement key={i} delay={i * 100}>
              <div className="testimonial">
                <div className="testimonial-header">
      
