import React from 'react';
import {Row, Col, Label, Button} from 'reactstrap';
import {Control, Form} from 'react-redux-form';

class RegisterTutor extends React.Component{
    constructor(props) {
        super(props);

        this.handleRegisterTutor = this.handleRegisterTutor.bind(this);
    }

    handleRegisterTutor(values){
        this.props.postTutor(values);
        this.props.resetTutorForm();
    }

    render() {
        return(
            <div className='container'>
                <div className='row '>
                    <h1>Регистрация</h1>
                </div>
                <div className='row row-content justify-content-center'>
                    <Form model='tutorForm' onSubmit={(values) => this.handleRegisterTutor(values)}>
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
                            <Label htmlFor='telnum' md={4}>Телефон</Label>
                            <Col md={8}>
                                <Control.text model='.telnum' id='telnum' name='telnum' placeholder='Номер' className='form-control'/>
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Label htmlFor='description' md={12}>Опишите ваш опыт работы</Label>
                            <Col md={12}>
                                <Control.textarea model='.description' id='description' name='description' rows='5' className='form-control'/>
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Col md={{size: 8, offset: 4}}>
                                <Button type='submit' color='primary'>
                                    Подать заявку
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        )
    }
}

export default RegisterTutor;
