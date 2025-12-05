import { createRoot } from 'react-dom/client'
import { Container } from "react-bootstrap"
import { CreateLinkPage } from "./pages/CreateLinkPage"

createRoot(document.getElementById('root')!).render(
    <App />
)

function App() {

  return (
    <Container>
        <CreateLinkPage/>
    </Container>
  )
}

export default App