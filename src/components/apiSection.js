import React from 'react'
import { Button, Accordion, Card } from 'react-bootstrap'
import ApiTable from './apiTable';
import getCapsRequest from '../pictures/getcapsrequest.png';
import getCapsResponse from '../pictures/getcapsresponse.png';
import postCapRequest from '../pictures/postcaprequest.png';
import postCapResponse from '../pictures/postcapresponse.png';
import getCapRequest from '../pictures/getcaprequest.png';
import getCapResponse from '../pictures/getcapresponse.png';
import putCapRequest from '../pictures/putcaprequest.png';
import putCapResponse from '../pictures/putcapresponse.png';
import deleteCapRequest from '../pictures/deletecaprequest.png';
import deleteCapResponse from '../pictures/deletecapresponse.png';
import validateCapRequest from '../pictures/validatecaprequest.png';
import validateCapResponse from '../pictures/validatecapresponse.png';
import whatCapAreYouRequest from '../pictures/whatcapareyourequest.png';
import whatCapAreYouResponse from '../pictures/whatcapareyouresponse.png';
import linksRequest from '../pictures/linksrequest.png';
import linksResponse from '../pictures/linksresponse.png';
import catalogRequest from '../pictures/catalogrequest.png';
import catalogResponse from '../pictures/catalogresponse.png';


const APISection = () => {
    return (
        <Accordion defaultActiveKey="=1">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="light" eventKey="0">
                        https://bottlecapcollector.herokuapp.com/caps/
            </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <ApiTable
                            description={"Get all caps available"}
                            methods={"GET"}
                            auth={"-"}
                            parameters={"-"}
                            returns={"Array of BottleCap objects with status code 200 OK"}
                            request={getCapsRequest}
                            response={getCapsResponse}
                        />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="light" eventKey="1">
                        https://bottlecapcollector.herokuapp.com/caps/
            </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <ApiTable
                            description={"Add new cap"}
                            methods={"POST"}
                            auth={"HTTP Basic, admin role"}
                            parameters={"name : String, desc : String, file : MultipartFile"}
                            returns={"ID with status code 201 CREATED or 400 BAD REQUEST"}
                            request={postCapRequest}
                            response={postCapResponse}
                        />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="light" eventKey="2">
                        https://bottlecapcollector.herokuapp.com/caps/{"{id}"}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <ApiTable
                            description={"Get cap"}
                            methods={"GET"}
                            auth={"-"}
                            parameters={"{id} : Long"}
                            returns={"BottleCap object with status code 200 OK or 404 NOT FOUND"}
                            request={getCapRequest}
                            response={getCapResponse}
                        />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="light" eventKey="3">
                        https://bottlecapcollector.herokuapp.com/caps/{"{id}"}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>
                        <ApiTable
                            description={"Update cap"}
                            methods={"PUT"}
                            auth={"HTTP Basic, Admin role"}
                            parameters={"{id} : Long, newName : String, newDesc : String"}
                            returns={"ID with status code 200 OK or 400 BAD_REQUEST"}
                            request={putCapRequest}
                            response={putCapResponse}
                        />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="light" eventKey="4">
                        https://bottlecapcollector.herokuapp.com/caps/{"{id}"}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                    <Card.Body>
                        <ApiTable
                            description={"Delete Cap"}
                            methods={"DELETE"}
                            auth={"HTTP Basic, Admin role"}
                            parameters={"{id} : Long"}
                            returns={"Deleted cap ID with status code 200 OK , 400 BAD_REQUEST, or 404 NOT_FOUND"}
                            request={deleteCapRequest}
                            response={deleteCapResponse}
                        />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="light" eventKey="5">
                        https://bottlecapcollector.herokuapp.com/validateCap/
            </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                    <Card.Body>
                        <ApiTable
                            description={"Check if cap is duplicate"}
                            methods={"POST"}
                            auth={"-"}
                            parameters={"name : String, desc : String, file : MultipartFile"}
                            returns={"Similarity model with status code 200 OK"}
                            request={validateCapRequest}
                            response={validateCapResponse}
                        />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="light" eventKey="6">
                        https://bottlecapcollector.herokuapp.com/whatCapAreYou/
            </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="6">
                    <Card.Body>
                        <ApiTable
                            description={"Get most similar cap"}
                            methods={"POST"}
                            auth={"-"}
                            parameters={"name : String, file : MultipartFile"}
                            returns={"BottleCap object with status code 200 OK"}
                            request={whatCapAreYouRequest}
                            response={whatCapAreYouResponse}
                        />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="light" eventKey="7">
                        https://bottlecapcollector.herokuapp.com/links/
            </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                    <Card.Body>
                        <ApiTable
                            description={"Get all caps pictures links"}
                            methods={"GET"}
                            auth={"-"}
                            parameters={"-"}
                            returns={"Array of PictureWrapper objects with status code 200 OK"}
                            request={linksRequest}
                            response={linksResponse}
                        />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="light" eventKey="8">
                        https://bottlecapcollector.herokuapp.com/catalog/
            </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="8">
                    <Card.Body>
                        <ApiTable
                            description={"Get all caps pictures as catalog"}
                            methods={"GET"}
                            auth={"-"}
                            parameters={"-"}
                            returns={"Array of CapWrapper objects with status code 200 OK"}
                            request={catalogRequest}
                            response={catalogResponse}
                        />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
};

export default APISection
