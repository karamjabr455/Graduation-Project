import '../styles/Login.css'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub, FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { useEffect } from 'react'

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const container = document.querySelector('.login-container')
    container.style.animation = 'fadeOut 0.5s ease forwards'

    setTimeout(() => {
      navigate('/transition')
    }, 500)
  }

  return (
    <motion.div 
      className="login-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="login-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="left-section">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >مرحباً بعودتك</motion.h1>
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >سجّل الدخول</motion.h2>
          <motion.h3
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >لتتابع تعلمك البرمجي</motion.h3>
        </div>

        <motion.div 
          className="login-form"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2>التسجيل عبر</h2>
          <div className="social-buttons">
            <motion.button 
              className="social-btn github"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={20} />
              Github
            </motion.button>
            <motion.button 
              className="social-btn facebook"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFacebook size={20} color="#1877f2" />
              Facebook
            </motion.button>
            <motion.button 
              className="social-btn google"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FcGoogle size={20} />
              Google
            </motion.button>
          </div>

          <form onSubmit={handleLogin}>
            <motion.input 
              type="email" 
              placeholder="البريد الإلكتروني"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            />
            <motion.input 
              type="password" 
              placeholder="كلمة المرور"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
            
            <motion.div 
              className="forgot-password"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a href="#/reset-password">نسيت كلمة المرور؟</a>
            </motion.div>
            
            <motion.button 
              type="submit" 
              className="login-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              تسجيل الدخول
            </motion.button>

            <motion.div 
              className="signup-link"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              ليس لديك حساب؟ <a href="#/signup">أنشئ حسابك الآن</a>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Login
