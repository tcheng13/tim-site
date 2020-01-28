import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'


const ContactPage = ()=> {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact</h1>
            <p>email: tcheng13@berkeley.edu</p>
            <p>phone: +1(805)-404-45657</p>
            <p>instagram: <a href='https://www.instagram.com/tcheng__' target="_blank">tcheng__</a></p>
        </Layout>
    )
}

export default ContactPage