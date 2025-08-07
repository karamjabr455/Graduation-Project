import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../styles/TransitionScreen.css'
import leftImage from '../assets/images/Rectangle14.png'
import rightImage from '../assets/images/Rectangle15.png'
import logo from '../assets/images/logo.png'


const TransitionScreen = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/quiz')
    }, 5000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <motion.div 
      className="transition-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="left-image"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <img src={leftImage} alt="Code Left" />
      </motion.div>

      <motion.div 
        className="center-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <img src={logo} alt="Dev Academy" className="logo" />
        <h1>جاري تحضير منصتك التعليمية</h1>
        <div className="loading-bar">
          <motion.div 
            className="loading-progress"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2 }}
          />
        </div>
      </motion.div>

      <motion.div 
        className="right-image"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <img src={rightImage} alt="Code Right" />
      </motion.div>
    </motion.div>
  )
}

export default TransitionScreen