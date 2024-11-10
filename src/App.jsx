import styles from "./style"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import { Footer } from "./components/Footer"
import Buisness from "./components/Buisness"
import {Partners, Testimonials} from "./components/Partners"

function App() {

  return (
    <div className="bg-primary z-[-10] h-fit w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}><Hero /></div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Buisness />
          {/* Stats
          Business
          Billing
          Stats
          CardDeal
          Testimonials
          Clients
          CTA */}
          <Testimonials />
          <Partners />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
