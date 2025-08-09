import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaRocket, FaClock, FaUsers, FaCheckCircle } from 'react-icons/fa'
import '../styles/HomeContent.css'
import howItWorksImage from '../assets/images/Rectangle 5.png'
import userImage1 from '../assets/images/Rectangle 9.png'
import userImage2 from '../assets/images/Rectangle 10.png'
import userImage3 from '../assets/images/Rectangle 11.png'

const HomeContent = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  return (
    <div className={`home-content ${isRTL ? 'rtl' : 'ltr'}`}>
      <section className="features-section">
        <h2 className="section-title">{t('features.title')}</h2>
        <div className="features-grid">
          <motion.div className="feature-card" whileHover={{ y: -10 }}>
            <FaRocket className="feature-icon" />
            <h3>{t('features.card1.title')}</h3>
            <p>{t('features.card1.description')}</p>
          </motion.div>

          <motion.div className="feature-card" whileHover={{ y: -10 }}>
            <FaClock className="feature-icon" />
            <p>{t('features.card2.description')}</p>
          </motion.div>

          <motion.div className="feature-card" whileHover={{ y: -10 }}>
            <FaUsers className="feature-icon" />
            <p>{t('features.card3.description')}</p>
          </motion.div>

          <motion.div className="feature-card" whileHover={{ y: -10 }}>
            <FaCheckCircle className="feature-icon" />
            <p>{t('features.card4.description')}</p>
          </motion.div>
        </div>
      </section>

      <section className="how-it-works">
        <h2 className="section-title">{t('howItWorks.title')}</h2>
        <div className="how-it-works-content">
          <div className="steps-container">
            {[1, 2, 3].map((step) => (
              <div key={step} className="step">
                <div className="step-number">{step}</div>
                <div className="step-text">
                  <h3>{t(`howItWorks.step${step}`)}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="how-it-works-image">
            <img src={howItWorksImage} alt={t('howItWorks.imageAlt')} />
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2 className="section-title">{t('testimonials.title')}</h2>
        <div className="testimonials-grid">
          {[1, 2, 3].map((index) => (
            <motion.div 
              key={index}
              className="testimonial-card"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={[userImage1, userImage2, userImage3][index - 1]} 
                alt={t(`testimonials.user${index}.alt`)} 
              />
              <h3>{t(`testimonials.user${index}.name`)}</h3>
              <p>{t(`testimonials.user${index}.quote`)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{t('footer.quickLinks.title')}</h3>
            <ul>
              {['home', 'paths', 'about'].map((link) => (
                <li key={link}>{t(`footer.quickLinks.${link}`)}</li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3>{t('footer.legal.title')}</h3>
            <ul>
              {['privacy', 'terms', 'contact'].map((link) => (
                <li key={link}>{t(`footer.legal.${link}`)}</li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3>{t('footer.social.title')}</h3>
            <div className="social-links">
              {['twitter', 'facebook', 'instagram', 'youtube'].map((social) => (
                <a key={social} href={`#${social}`}>
                  {t(`footer.social.${social}`)}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </footer>
    </div>
  )
}

export default HomeContent