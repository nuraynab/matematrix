import React from 'react';
import {Button, Col, Label, Row} from "reactstrap";
import {Control, Form} from 'react-redux-form';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(values){
        this.props.processLogin(values);
        this.props.resetLoginForm();
    }

    render() {
        return (
            <div className='container'>
                <div className='row '>
                    <h1>Логин</h1>
                </div>
                <div className='row row-content justify-content-center'>
                    <Form model='login' onSubmit={(values) => this.handleLogin(values)}>
                        <Row className='form-group'>
                            <Label htmlFor='username' md={4}>Логин</Label>
                            <Col md={8}>
                                <Control.text model='.username' id='username' name='username' placeholder='Логин' className='form-control'/>
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Label htmlFor='password' md={4}>Пароль</Label>
                            <Col md={8}>
                                <Control.text type='password' model='.password' id='password' name='password' className='form-control'/>
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Col md={{size: 8, offset: 4}}>
                                <Button type='submit' color='primary'>
                                    Войти
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;
