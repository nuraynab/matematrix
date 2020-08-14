import React from "react";
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button} from "reactstrap";
import {NavLink} from "react-router-dom";

class Header extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen:false,
            isModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        const {isAuthenticated} = this.props.auth;

        const userLinks = (
            <Nav>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/profile'>
                            <p>
                                {this.props.auth.user.username}
                            </p>
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav>
                    <NavItem>
                        <NavLink className='nav-link' to='/home'>
                            <Button outline onClick={this.props.processLogout}>
                                Выход
                            </Button>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Nav>

        )

        const guestLinks = (
            <Nav className='ml-auto' navbar>
                <NavItem>
                    <NavLink className='nav-link' to='/login'>
                        <Button outline>
                            Логин
                        </Button>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/register'>
                        <Button outline>
                            Регистрация
                        </Button>
                    </NavLink>
                </NavItem>
            </Nav>
        )

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
                                    <DropdownMenu left='true'>
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
                                    <NavLink className='nav-link' to='/tutors'>Репетиторы</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/about'>О нас</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        {isAuthenticated ? userLinks : guestLinks}
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
            </div>
        )
    }
}

export default Header;
