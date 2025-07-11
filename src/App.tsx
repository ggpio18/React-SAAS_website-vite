import Header from "./components/Header"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Header />
    </div>
  )
}

export default App