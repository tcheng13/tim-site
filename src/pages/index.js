import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const IndexPage = () => {
    return (
        <Layout>
            <h1>Hey What's Up Hello</h1>
            <h3>I'm Tim, a Marketing Technology intern at MailChimp in Atlanta, GA.</h3>
            <p>Let's chat! <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage