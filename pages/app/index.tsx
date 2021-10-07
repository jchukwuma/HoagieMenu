import { Pane, Card, Button, Menu } from "evergreen-ui";
import Link from "next/link";
import { useUser } from '../../mock/UserProvider'
import MenuCard from '../../components/MenuCard'

/*const App = () => {
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
}*/

const App = (props) => {
  let {user} = useUser();

  let mainEntree = [<Pane>Orange Beef with Broccoli</Pane>];
  let vegan = [<Pane>Pan-Asian Orange Tofu</Pane>];
  let soups = [<Pane>Cream of Mushroom Soup</Pane>, <Pane>Minestrone Soup</Pane>];
  let saladBar = [<Pane>Fresh Fruit Salad</Pane>];

  let food = {
    mainEntree: mainEntree, 
    vegan: vegan,
    soups: soups,
    saladBar: saladBar
  }

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

    {/* Component */}
    <MenuCard college="Whitman" disabled = {false} food={food}/>

    {/* Explicit */}
    <Card 
      backgroundColor="white"
      padding="30px" marginLeft = "30px"
    >
      <h1 className = "h1">Whitman</h1>
      <Pane>
        <b>Main Entree</b>
        {mainEntree}
      </Pane>
      <Pane paddingTop = "10px">
        <b>Vegetarian + Vegan Entree</b>
        {vegan}
      </Pane>
      <Pane paddingTop = "10px">
        <b>Soups</b>
        {soups}
      </Pane>
      <Pane paddingTop = "10px">
        <b>Salad Bar</b>
        {saladBar}
      </Pane>
      <Link href="/">
        <Button marginTop="40px">Back</Button>
      </Link>
    </Card>
  </Pane>;
}

export default App;