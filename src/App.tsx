import Features from "./components/Features"
import Header from "./components/Header"
import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import Partners from "./components/Partners"
import Stats from "./components/Stats"
import Testimonial from "./components/Testimonial"


const App = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Header />
      <Partners />
      <Features />
      <Stats />
      <Intro />
      <Testimonial />
    </div>
  )
}

export default App