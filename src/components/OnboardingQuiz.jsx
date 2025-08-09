import { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/OnboardingQuiz.css'
import { useNavigate } from 'react-router-dom'

const OnboardingQuiz = () => {
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: ''
  })

  const handleChange = (questionKey, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionKey]: value
    }))
  }

  const navigate = useNavigate()
  const handleSubmit = () => {
    // Add any validation if needed
    navigate('/result')
  }

  return (
    <motion.div 
      className="quiz-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="quiz-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="quiz-header">
          <h1>لنبدأ بتخصيص تجربتك</h1>
          <p>أجب عن هذه الأسئلة القصيرة ليقترح عليك المسار الأنسب لك</p>
        </div>

        <div className="quiz-questions">

          {/* سؤال 1 */}
          <div className="question">
            <h2>1. هل سبق لك تعلم البرمجة؟</h2>
            <div className="options">
              {["لم أبدأ بعد", "لدي معرفة بسيطة", "لدي خبرة متوسطة", "متمكن"].map((option, idx) => (
                <label key={idx} className="radio-option">
                  <input
                    type="radio"
                    name="q1"
                    value={option}
                    checked={answers.q1 === option}
                    onChange={() => handleChange('q1', option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* سؤال 2 */}
          <div className="question">
            <h2>2. ما هدفك من تعلم البرمجة؟</h2>
            <div className="options">
              {["دخول سوق العمل الحر", "تطوير نفسي", "بناء مشاريع خاصة", "لا أعلم بعد"].map((option, idx) => (
                <label key={idx} className="radio-option">
                  <input
                    type="radio"
                    name="q2"
                    value={option}
                    checked={answers.q2 === option}
                    onChange={() => handleChange('q2', option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* سؤال 3 */}
          <div className="question">
            <h2>3. كم ساعة لديك للدراسة أسبوعياً؟</h2>
            <div className="options">
              {["أقل من 3 ساعات", "3-5 ساعات", "أكثر من 5 ساعات", "أكثر من 8 ساعات"].map((option, idx) => (
                <label key={idx} className="radio-option">
                  <input
                    type="radio"
                    name="q3"
                    value={option}
                    checked={answers.q3 === option}
                    onChange={() => handleChange('q3', option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

        </div>

        <motion.button 
          className="submit-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
        >
          الإرسال
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default OnboardingQuiz
