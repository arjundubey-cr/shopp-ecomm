import React from 'react'
import logo from '../logo/lu_logo_nobg.png'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='light' variant='light' collapseOnSelect expand='lg'>
        <Container>
          {/* Branding */}
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img
                alt='lu_logo'
                src={logo}
                height='60'
                className='d-inline-block align-top'
              />
              <div>Shopping Point</div>
            </Navbar.Brand>
          </LinkContainer>
          {/* Navbar toggle area starts */}
          <Navbar.Toggle aria-controls='basic-navbar-nav'>
            <i className='fa fa-bars fa-lg' aria-hidden='true' />
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart' /> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/signin'>
                <Nav.Link>
                  <i className='fas fa-login' /> Cart
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
