import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";

export default class Navi extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
  }
  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <Navbar color="info" expand="md">
          <NavbarBrand href="/">Uygulamam</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink><Link to="/">Ana Safa</Link></NavLink>
                
              </NavItem>
              <NavItem>
                <NavLink>Asdf asdflk</NavLink>
                
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub a git
                </NavLink>
              </NavItem>
              <CartSummary/>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
