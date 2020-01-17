import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = ()=> {
    return (
        <Layout>
            <h1>About</h1>
            <p>some of thoughts here</p>
            <p>Let's chat! <Link to="/contact">Contact me.</Link></p>
        </Layout>

    )
}

export default AboutPage