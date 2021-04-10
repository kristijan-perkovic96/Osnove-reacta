import React, { Component } from 'react';
import { Button, Col, Container, FormControl, FormLabel, Modal, ModalBody, ModalFooter, ModalTitle, Row, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';


class KomponentaSDizajnom extends Component {

    constructor() {
        super();
        this.state = {
            tab: "forma"
        }
    }

    render() {
        return (
            <Modal show={true}>
                <ModalHeader>
                    <ModalTitle>Forma</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Tabs
                        activeKey={this.state.tab}
                        onSelect={(k) => this.setState({ tab: k })}>
                        <Tab eventKey="forma" title="Unos">
                            <Container>
                                <Row>
                                    <Col className="col-6">
                                        <FormLabel>Ime:</FormLabel>
                                        <FormControl />
                                    </Col>
                                    <Col>
                                        <FormLabel> Prezime: </FormLabel>
                                        <FormControl />
                                    </Col>
                                </Row>
                            </Container>
                        </Tab>
                        <Tab eventKey="objasnjenje" title="Objašnjenje">
                            <Container>
                                <Row><p></p></Row>
                                <Row>
                                    <p> Potrebno je unjeti ime i prezime.</p>
                                </Row>
                            </Container>
                        </Tab>
                    </Tabs>
                </ModalBody>
                <ModalFooter>
                    <Button variant="primary">Klikni</Button>
                </ModalFooter>
            </Modal>
        );
    }
}
export default KomponentaSDizajnom;