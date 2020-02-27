import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../Home.css';
import {Card} from "react-bootstrap";
import '@inrupt/solid-style-guide';

const TimeLineRoute = props => (
    <Card className="mt-3 mb-3 align-content-lg-start">
        <Card.Body>
            <Card.Title className="text-dark"> {props.title} </Card.Title>
            <Card.Subtitle className="mb-2 text-muted"> Creada el {props.date} por {props.author} </Card.Subtitle>
            <Card.Text>
                {props.description}
            </Card.Text>
            <Card.Link href="#" className="text-success">Ver detalles</Card.Link>
            <Card.Link href="#" className="text-success">Compartir</Card.Link>
        </Card.Body>
    </Card>
)

export default TimeLineRoute;