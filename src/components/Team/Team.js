import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Team = (props) => {
    const { strTeam, strTeamBadge, strSport, idTeam } = props.team
    return (
        <div className='col-md-4 col-sm-12 my-3'>
            <Card className='p-3'>
                <Card.Img variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>
                        Sports type : {strSport}
                    </Card.Text>
                    <Link to={`/team/${idTeam}`}>
                        <Button variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Team;