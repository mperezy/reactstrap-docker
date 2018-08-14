import React, { Component } from 'react';
import ModalExample from './components/Modal';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState({
            isOpen : !this.state.isOpen
        });
    }

    alertFunction(event, buttonType){
        alert("This is a " + buttonType + " button");
    }

    /*alertFunction() {
        this.modal.toggle();
    }*/

    render() {
        return (
            <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Welcome to React, fagots!!!</h1>
                </header>
                  <br/>
                <p className="App-intro">
                    Hello Blazzing Red, how you doing guys?
                </p>
                <div>
                    <ModalExample ref={modal => this.modal = modal}/><br/>
                    <Button color="primary" onClick={(e) => this.alertFunction(e, 'primary')}>Primary button</Button>{' '}
                    <Button color="success" onClick={(e) => this.alertFunction(e, 'success')}>Success button</Button>{' '}
                    <Button color="danger" onClick={(e) => this.alertFunction(e, 'danger')}>Danger button</Button>
                </div>
                <br/>
                <div>
                    <Navbar color="inverse" light expand="md">
                        <NavbarBrand href="/">reactstrap</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/components/">Components</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    <Jumbotron>
                        <Container>
                            <Row>
                                <Col>
                                    <h1>Welcome to this, madaqas!</h1>
                                    <p>
                                        <Button
                                            tag="a"
                                            color="success"
                                            size="large"
                                            href="http://reactstrap.github.io"
                                            target="_blank"
                                        >
                                            View Reactstrap Docs
                                        </Button>
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                </div>
            </div>
        );
    }
}

export default App;
