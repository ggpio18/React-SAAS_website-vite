import Features from "./components/Features"
import Header from "./components/Header"
import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import Partners from "./components/Partners"
import Stats from "./components/Stats"


const App = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Header />
      <Partners />
      <Features />
      <Stats />
      <Intro />
    </div>
  )
}

export default App