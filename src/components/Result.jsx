import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import '../styles/Result.css'

const Result = () => {
  const navigate = useNavigate()

  return (
    <motion.div 
      className="result-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="result-content"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1>النتيجة:</h1>
        <h2>مبتدئ</h2>
        
        <div className="result-details">
          <h3>نقترح لك مسار المبتدئين</h3>
          <p>تبدأ بتعلم HTML و CSS بخطوات بسيطة وتفاعلية</p>
        </div>

        <motion.button 
          className="start-path-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/Homepage')}
        >
          ابدأ هذا المسار الآن
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default Result