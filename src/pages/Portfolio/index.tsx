import React from 'react'
import Home from '../../components/Home'
import PortfolioShowcase from '../../components/Portfolio'
import styles from './styles.module.css'

const PortfolioPage: React.FC = () => {
  return (
    <div className={styles.portfolioPage}>
      <Home />
      <PortfolioShowcase />
    </div>
  )
}

export default PortfolioPage
