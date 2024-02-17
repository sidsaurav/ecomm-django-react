import React from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Container, Row, Col } from 'react-bootstrap'
const App = () => {
  return (
    <>
        <Container>
            <Row>
                <Col md={2}>Hi this is col1</Col>
                <Col md={10}>Hi this is col2</Col>
            </Row>
        </Container>
    </>
  )
}

export default App