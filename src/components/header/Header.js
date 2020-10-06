import React from 'react'
import './header.css'
import Nav from 'react-bootstrap/Nav'
import logo from '../../assests/logo.svg'

export default function Header() {
    return (
        <Nav className="header pt-1"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link className="item-logo" href="/home"><img alt="logo" className="mr-3" style={{maxHeight:'30px'}} src={logo} />Pettnaut</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Acerca de</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Colaborar</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Sponsors</Nav.Link>
        </Nav.Item>
      </Nav>
    )
}
