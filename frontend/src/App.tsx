import { createRoot } from 'react-dom/client'
import { CreateLinkPage } from "./pages/CreateLinkPage"

createRoot(document.getElementById('root')!).render(
    <App />
)

function App() {

  return (
    <>
        <CreateLinkPage/>
    </>
  )
}

export default App