import Features from "./components/Features"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Partners from "./components/Partners"


const App = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Header />
      <Partners />
      <Features />
    </div>
  )
}

export default App