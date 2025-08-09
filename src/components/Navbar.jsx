import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import '../styles/Navbar.css'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar'
    i18n.changeLanguage(newLang)
    document.dir = newLang === 'ar' ? 'rtl' : 'ltr'
  }

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="nav-container">
        <div className="nav-right">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="Dev Academy" />
          </Link>

          <button 
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>{t('nav.home')}</Link>
            <Link to="/dashboard" onClick={() => setMenuOpen(false)}>{t('nav.dashboard')}</Link>
            <Link to="/courses" onClick={() => setMenuOpen(false)}>{t('nav.courses')}</Link>
            <Link to="/quiz" onClick={() => setMenuOpen(false)}>{t('nav.quiz')}</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>{t('nav.about')}</Link>
          </div>
        </div>
        
        <div className="nav-left">
          <div className="search-bar">
            <input type="text" placeholder={t('nav.search')} />
          </div>
          <div className="language-switch">
            <button onClick={toggleLanguage}>
              {i18n.language === 'ar' ? 'English | عربي' : 'Arabic | إنجليزي'}
            </button>
          </div>
          <div className="user-profile">
            <img src="/src/assets/images/5951615935771167169.jpg" alt="Profile" />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
