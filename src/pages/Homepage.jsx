import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HomeContent from '../components/HomeContent'

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Hero />
      <HomeContent />
    </div>
  )
}

export default Homepage