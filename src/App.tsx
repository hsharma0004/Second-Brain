
import './App.css'
import { Button } from './components/button'
import { PlusIcon } from './incons/PlusIcon'
import { ShareIcon } from './incons/ShareIcon'

function App() {

  return (
    <>
    <Button 
    variant = {"primary"}
    startIcon = {<PlusIcon size = {"lg"} />} 
    endIcon={<ShareIcon size = {"lg"}/>}
    size = "lg"
    title={"Share"}
    ></Button>

   <Button 
    variant = {"secondary"}
    startIcon = {<PlusIcon size = {"lg"} />} 
    endIcon={<ShareIcon size = {"lg"}/>}
    size = "lg"
    title={"Share"}
    ></Button>
    </>
  )
}

export default App
