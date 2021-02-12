import React, {Component} from 'react';
import Base from "../../hoc/Base";
import
{
    Container, Row, Col, Card
} from "react-bootstrap";

class Dashboard extends Component {
    render() {
        return <Base>
            <Container fluid>
                <Row className={'text-center'}>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle>Total Records:</Card.Subtitle>
                                <Card.Text>Some Quick Texts</Card.Text>
                                <Card.Link href={'#'}>Click here</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle>Total Records:</Card.Subtitle>
                                <Card.Text>Some Quick Text</Card.Text>
                                <Card.Link href={'#'}>Click here</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle>Total Records:</Card.Subtitle>
                            <Card.Text>Some Quick Text</Card.Text>
                            <Card.Link href={'#'}>Click here</Card.Link>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle>Total Records:</Card.Subtitle>
                            <Card.Text>Some Quick Text</Card.Text>
                            <Card.Link href={'#'}>Click here</Card.Link>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </Base>
    }
}

export default Dashboard;
