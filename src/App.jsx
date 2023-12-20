import Header from './components/sections/Header'
import Start from './components/sections/Start'
import Features from './components/sections/Features'
import Extensions from './components/sections/Extensions'
import Questions from './components/sections/Questions'
import ContactForm from './components/sections/ContactForm'
import Footer from './components/sections/Footer'
import Modal from './components/Modal'

function App() {
  return (
    <>
      <Modal/>
      <Header/>
      <main>
        <Start/>
        <Features/>
        <Extensions/>
        <Questions/>
      </main>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App
