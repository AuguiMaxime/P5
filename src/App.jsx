import { Routes, Route } from "react-router-dom"
import Banner from './components/Banner'
import Section1 from './components/Section1'
import Footer from './components/Footer'

function Home() {
  return <Section1 />
}

function About() {
  return <h1>Page À propos</h1>
}

const App = () => {
  return (
    <>
      <Banner />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
