import { Pane, Card, Button } from "evergreen-ui";
import Link from "next/link";
import { useUser } from '../../mock/UserProvider'

const App = () => {
  let {user} = useUser();
  return <Pane 
    display="flex" 
    width="100%" 
    justifyContent="center"
    marginTop="100px"
  >
    <Card 
      backgroundColor="white"
      padding="30px"
    >
      <Pane>
        Hello, <b>{user.name}</b>
      </Pane>
      <Link href="/">
        <Button marginTop="40px">Back</Button>
      </Link>
    </Card>
  </Pane>;
}

export default App;