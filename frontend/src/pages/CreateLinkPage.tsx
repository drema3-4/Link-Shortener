import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'

export function CreateLinkPage() {
    const [userRef, setUserRef] = useState('')

    function clickButton() {
        console.log(userRef)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <input type='text' onChange={e => setUserRef(e.target.value)} value={userRef}/>
                    <button className="btn btn-primary" onClick={clickButton}>Создать</button>
                </Col>
            </Row>
        </Container>
    )
}