import React from "react"
import {  Navbar, Nav } from 'react-bootstrap'
class AppHeader extends React.Component {
    render = () => {return(
        <div>
        <Navbar bg="primary" variant="dark" style={{  marginBottom: '2%' }}>
            <Nav className="mr-auto" >
                <Nav.Link href="/" >Home</Nav.Link>
                <Nav.Link href="login" >login</Nav.Link>
            </Nav>
        </Navbar>
        </div>
    );}
}

export default AppHeader;