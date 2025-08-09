
import { HashRouter, Routes, Route } from 'react-router-dom'
import './i18n'

import Homepage from './pages/Homepage'
import SignUp from './components/SignUp'
import Login from './components/Login'
import './styles/global.css'
import TransitionScreen from './components/TransitionScreen'
import OnboardingQuiz from './components/OnboardingQuiz'
import Result from './components/Result'


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<OnboardingQuiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/Homepage" element={<Homepage />} />
        
        <Route path="/transition" element={<TransitionScreen />} />
      </Routes>
    </HashRouter>
  )
}

export default App
