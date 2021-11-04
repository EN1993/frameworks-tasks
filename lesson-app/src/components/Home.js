import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Accordion from 'react-bootstrap/Accordion'

function Home() {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
  
        <Navbar.Brand href="#Home"> React Bootstrap</Navbar.Brand>
      
        <Form inline>
          <Form.Control type="search" placeholder="Search" className="mr-sm-2" />
            
        </Form>
    
      </Navbar>
      <h2>This is heading</h2>
      <p>This is a paragraph lorem klkakklda  dakkdnkndakna  da fkkf   bkfnabbfa   f f ak k faknfaknjnkf</p>
      <h3>Heading h3</h3>
      <Container>
        <Row>
          <Col md={6}>
           
            <Form>
              <Form.Group >
                
                <Form.Control type="Name" placeholder="Name" />
              </Form.Group>
              <Form.Group >
                <Form.Control type="email" placeholder="email" />
              </Form.Group>
              <Form.Group >
                <Form.Control as="textarea" rows="6" placeholder="Message" />
              </Form.Group>

              
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </Col>
          <Col md={6}>
          <Accordion defaultActiveKey="0" className="d-md-none">
              <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Profile
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                About
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Contact
              </Accordion.Body>
            </Accordion.Item>                   
          </Accordion> 
          <div className="d-none d-md-block"> 
            <Tabs defaultActiveKey="one" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="one" title="Home"> 
                Tab 1
              </Tab>
              <Tab eventKey="two" title="Profile">
              Tab 2
              </Tab>
              <Tab eventKey="three" title="Contact" >
                Tab 3
              </Tab>
            </Tabs>
          </div>
          </Col>
        </Row>
      </Container>
      
    </>
  )
}

export default Home
