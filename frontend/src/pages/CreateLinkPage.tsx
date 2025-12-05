import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'

export function CreateLinkPage() {
    const [userRef, setUserRef] = useState('')

    return (
        <Container>
            <Row>
                <Col>
                    <input type='text' onChange={e => setUserRef(e.target.value)} value={userRef}/>
                </Col>
            </Row>
        </Container>
    )
}