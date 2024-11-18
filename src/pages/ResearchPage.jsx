import React from 'react'
import Navbar from '../components/Navbar'
import Research from '../components/Research'
import { Footer } from '../components/Footer'
import styles from '../style'

const ResearchPage = () => {
    return (
        <div className={`bg-primary z-[-10] h-fit w-full overflow-hidden ${styles.paddingX}`}>
            <Navbar />
            <Research />
            <Footer />
        </div>
    )
}

export default ResearchPage