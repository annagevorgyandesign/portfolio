import React from 'react'
import Home, { type HomeProps } from '../../components/Home'
import styles from './styles.module.css'

const PortfolioPage: React.FC<HomeProps> = (props) => {
  return (
    <div className={styles.portfolioPage}>
      <Home {...props} />
    </div>
  )
}

export default PortfolioPage
