import React from "react";
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button} from "reactstrap";
import {NavLink} from "react-router-dom";

class Header extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen:false,
            isModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleLoginModal = this.toggleLoginModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleLoginModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event){
        this.toggleLoginModal();
        alert('Username: ' + this.username.value + ' Password: ' + this.password.value);
        event.preventDefault();
    }

    render() {
        return(
            <div>
                <Navbar dark expand='md'>
                    <div className='container'>
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className='mr-auto'>Matematrix.ru</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/home'>Главная</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret className='nav-link' to='/problems'>
                                        Задачи
                                    </DropdownToggle>
                                    <DropdownMenu left>
                                        <DropdownItem>
                                            Геометрия
                                        </DropdownItem>
                                        <DropdownItem>
                                            Алгебра
                                        </DropdownItem>
                                        <DropdownItem>
                                            Высшая математика
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <NavLink className='nav-link' to='/courses'>Курсы</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/study'>Занятия</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/about'>О нас</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleLoginModal}>
                                    Войти
                                </Button>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className='container'>
                        <div className='row row-header'>
                            <div className='col-12 col-sm-6'>
                                <h1>Matematrix</h1>
                                <p>Краткое описание</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleLoginModal}>
                    <ModalHeader toggle={this.toggleLoginModal}>Войти</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor='username'>Логин</Label>
                                <Input type='text' id='username' name='username'
                                       innerRef={(input) => this.username = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='password'>Пароль</Label>
                                <Input type='password' id='password' name='passsword'
                                       innerRef={(input) => this.password = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Button type='submit' value='submit' color='primary'>Войти</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>

        )
    }
}

export default Header;
