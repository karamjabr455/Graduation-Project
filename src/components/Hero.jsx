import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import '../styles/Hero.css'
import heroImage from '../assets/images/Rectangle 3.png'
import { FaHtml5, FaCss3Alt, FaJs, FaAngular, FaPython, FaReact } from 'react-icons/fa'
import { SiFlutter } from 'react-icons/si'

const Hero = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  return (
    <section className={`hero-section ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="hero-container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1>{t('hero.title')}</h1>
            <h2>{t('hero.subtitle')}</h2>
            <motion.button 
              className="start-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.startButton')}
            </motion.button>
          </motion.div>

          <div className="stats">
            <div className="stat-item">
              <span className="number">{t('hero.stats.views')}</span>
              <span className="label">{t('hero.stats.viewsLabel')}</span>
            </div>
            <div className="stat-item">
              <span className="number">{t('hero.stats.subscribers')}</span>
              <span className="label">{t('hero.stats.subscribersLabel')}</span>
            </div>
            <div className="stat-item">
              <span className="number">{t('hero.stats.certificates')}</span>
              <span className="label">{t('hero.stats.certificatesLabel')}</span>
            </div>
          </div>
        </div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img src={heroImage} alt="Programming" className="main-image" />
          <div className="tech-icons">
            <FaHtml5 className="tech-icon html" />
            <FaCss3Alt className="tech-icon css" />
            <FaJs className="tech-icon js" />
            <FaAngular className="tech-icon angular" />
            <FaPython className="tech-icon python" />
            <FaReact className="tech-icon react" />
            <SiFlutter className="tech-icon flutter" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
