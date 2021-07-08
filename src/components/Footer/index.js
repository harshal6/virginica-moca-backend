import React, { useState } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Icon from '../Icon'


import artsyLogo from '../../images/artsy-logo.png'

import './styles.scss'
import axios from 'axios'

const Footer = ({ company, footer }) => {

    var [userName, setName] = useState();
    var [userEmail, setEmail] = useState();
    var [message, setMessage] = useState();

    const handleSubmit = () => {
        axios.post('http://localhost:3000/api/user/signup', { name: userName, email: userEmail })
            .then(result => {
                if (result.status == 200) {
                    setMessage('Registered Successfully')
                    setTimeout(() => {
                        setMessage('');
                    }, 3000);
                }
                setName('')
                setEmail('');
            }).catch(err => {
                setName('')
                setEmail('');
                setMessage(err.response.data.message)
                setTimeout(() => {
                    setMessage('');
                }, 3000);
            });
    }

    const {
        name,
        email,
        address,
        phone,
        socialProfiles
    } = company

    const {
        logo,
        copyright,
        slogan,
        emailTitle,
        socialTitle,
        links,
    } = footer

    return (
        <footer id="footer-main">
            <div className="footer footer-dark bg-gradient-primary footer-rotate">
                <div className="container">
                    <div className="row pt-md">
                        <div className="col-md-4 col-xl-3 d-flex flex-column left-side">
                            <Link to="/" className="footer-logo">
                                <Img
                                    fluid={logo.file.fluid}
                                    alt={logo.file.alt}
                                    className="logo"
                                />
                                {/* <span className="logotype">{name}</span> */}
                            </Link>
                            <div className="details">
                                <p>{name}</p>
                                <span dangerouslySetInnerHTML={{ __html: address.childMarkdownRemark.html }} />
                                <a href="tel:{phone}" title="Call us">Call: {phone}</a>
                            </div>

                            <div className=""><p className="copyright">{copyright}</p></div>
                        </div>
                        <div className="border-start border-dark border-2 col-md-6 right-side">
                            <h6 className="heading mb-5">{slogan.toUpperCase()}</h6>
                            <h6 className="heading mb-2">{emailTitle.toUpperCase()}</h6>
                            <form>
                                <p>{message}</p>
                                <div className="mb-5">
                                    <div className="input-group mb-2">
                                        <input type="text" className="form-control" value={userName} onChange={(e) => setName(e.target.value)} placeholder="Name" aria-label="Name" aria-describedby="button-addon2" />
                                    </div>
                                    <div className="input-group mb-2">
                                        <input type="email" className="form-control" value={userEmail} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" aria-label="Email Address" aria-describedby="button-addon2" />
                                    </div>
                                    <div className="input-group">
                                        <button className="btn btn-outline-dark" onClick={handleSubmit} type="button" id="button-addon2">Sign Up</button>
                                    </div>
                                </div>
                            </form>

                            <div className="social mt-4">
                                <h6 className="heading mb-0 social-title">{socialTitle.toUpperCase()}</h6>
                                <ul className="list-inline social-list">
                                    {socialProfiles.map(sp => (<li key={sp.name} className="list-inline-item"><a href={sp.to} target="_blank" rel="noreferrer noopener"><Icon props={sp.icon} /></a></li>))}
                                    <li className="list-inline-item artsy"><a href="https://www.artsy.net/virginia-moca" target="_blank" rel="noreferrer noopener"><img src={artsyLogo} alt="Artsy" /></a></li>
                                </ul>
                            </div>
                            {links && (
                                <div className="footer-nav">
                                    <ul className="list-inline">
                                        {links.map(li => (<li key={li.name} className="list-inline-item"><Link to={li.to} title={li.title}>{li.label}</Link></li>))}
                                    </ul>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
