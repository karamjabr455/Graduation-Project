import '../styles/SignUp.css'
import { FaGithub, FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="right-section">
          <h1>ابدأ رحلتك</h1>
          <h2>في تعلم البرمجة الآن!</h2>
          <ul className="features-list">
            <li>تعلم بأسلوب مبسط وموجه</li>
            <li>اختبارات قصيرة بعد كل درس</li>
            <li>بوت ذكي يساعدك في كل خطوة</li>
          </ul>
        </div>

        <div className="signup-form">
          <h2>التسجيل عبر</h2>
          <div className="social-buttons">
            <button className="social-btn github">
              <FaGithub size={20} />
              Github
            </button>
            <button className="social-btn facebook">
              <FaFacebook size={20} color="#1877f2" />
              Facebook
            </button>
            <button className="social-btn google">
              <FcGoogle size={20} />
              Google
            </button>
          </div>

          <form>
            <div className="name-inputs">
              <input type="text" placeholder="الاسم الأول" />
              <input type="text" placeholder="الاسم الثاني" />
            </div>
            <input type="email" placeholder="البريد الإلكتروني" />
            <input type="password" placeholder="كلمة المرور" />
            <input type="password" placeholder="اعادة كلمة المرور" />
            
            <div className="login-link">
              لديك حساب؟ <a href="/login">تسجيل الدخول</a>
            </div>
            
            <button type="submit" className="signup-btn">إنشاء حساب</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp