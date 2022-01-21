import React, { Children } from 'react'
import Navbar from './Navbar'

import * as styles from '../styles/main.module.css'

function Layout({children}) {
    return (
        <div className={styles.main}>
            <Navbar />
            <div>
                {children}
            </div>
            
        </div>
    )
}

export default Layout
