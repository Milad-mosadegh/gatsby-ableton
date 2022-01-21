import { Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import Register from '../../components/Registe'

export default function Signup() {
    return (
        <Layout>
            <Register connectLink={ <Link to="/form/signin">Login here</Link>}/>
       </Layout>
    )
}
