import React from 'react'
import {Media, Button} from "reactstrap";
import {Link} from "react-router-dom";

class TutorsPage extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {

        function RenderTutor({tutor}) {
            return(
                    <Media tag='li'>
                        <Media body className='ml-5'>
                            <Media heading>{tutor.name}</Media>
                            <p>{tutor.description}</p>
                        </Media>
                    </Media>
            );
        }
        const tutors = this.props.tutors.tutors.map((tutor) => {
            return (
                    <RenderTutor tutor={tutor}/>
            );
        });

        return (
            <div className='container'>
                <div className='row'>
                    <h1>Репетиторы</h1>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h3>Хотите предложить свои услуги репетитора?</h3>
                        <Button><Link to='/tutor'>Подать заявку</Link></Button>
                    </div>
                </div>
                <div className='row row-content'>
                    <Media list>
                        {tutors}
                    </Media>
                </div>

            </div>
        );
    }
}

export default TutorsPage;
