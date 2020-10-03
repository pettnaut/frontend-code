import React from 'react'
import './header.css'
import Nav from 'react-bootstrap/Nav'

export default function Header() {
    return (
        <Nav className="header"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link className="item-logo" href="/home">Pettnaut</Nav.Link>
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
