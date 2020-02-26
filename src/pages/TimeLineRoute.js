import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../Home.css';
import {Card} from "react-bootstrap";

const TimeLineRoute = props =>(
    <Card className="mt-4 mb-4 ml-4 m-sm-4">
        <Card.Body>
            <Card.Title> {props.title} </Card.Title>
            <Card.Subtitle className="mb-2 text-muted"> Creada el {props.date} por {props.author} </Card.Subtitle>
            <Card.Text>
                {props.description}
            </Card.Text>
            <Card.Link href="#">Ver detalles</Card.Link>
            <Card.Link href="#">Compartir</Card.Link>
        </Card.Body>
    </Card>
)


export default TimeLineRoute;