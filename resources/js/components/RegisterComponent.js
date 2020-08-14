import React from 'react';
import {Row, Col, Label, Button} from 'reactstrap';
import {Control, Form} from 'react-redux-form';

class Register extends React.Component{
    constructor(props) {
        super(props);

        this.handleRegister = this.handleRegister.bind(this);
    }

    handleRegister(values){
        this.props.registerUser(values);
        this.props.resetRegisterForm();
    }

    render() {
        return(
            <div className='container'>
                <div className='row '>
                    <h1>Регистрация</h1>
                </div>
                <div className='row row-content justify-content-center'>
                    <Form model='register' onSubmit={(values) => this.handleRegister(values)}>
                        <Row className='form-group'>
                            <Label htmlFor='fname' md={4}>Имя</Label>
                            <Col md={8}>
                                <Control.text model='.fname' id='fname' name='fname' placeholder='Имя' className='form-control'/>
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Label htmlFor='sname' md={4}>Фамилия</Label>
                            <Col md={8}>
                                <Control.text model='.sname' id='sname' name='sname' placeholder='Фамилия' className='form-control'/>
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Label htmlFor='email' md={4}>Email</Label>
                            <Col md={8}>
                                <Control.text model='.email' id='email' name='email' placeholder='Email' className='form-control'/>
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Label htmlFor='education' md={4}>Место обучения</Label>
                            <Col md={8}>
                                <Control.text model='.education' id='education' name='education' className='form-control'/>
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Label htmlFor='age' md={4}>Возраст</Label>
                            <Col md={8}>
                                <Control.text model='.age' id='age' name='age' className='form-control'/>
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Label htmlFor='country' md={4}>Страна</Label>
                            <Col md={8}>
                                <Control.text model='.country' id='country' name='country' className='form-control'/>
                            </Col>
                        </Row>
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
                            <Label htmlFor='description' md={12}>Опишите ваши личные достижения</Label>
                            <Col md={12}>
                                <Control.textarea model='.description' id='description' name='description' rows='5' className='form-control'/>
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Col md={{size: 8, offset: 4}}>
                                <Button type='submit' color='primary'>
                                    Зарегистрироваться
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Register;
