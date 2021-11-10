import { Pane, Card, Button, Menu } from "evergreen-ui";
import Link from "next/link";
import { useUser } from '../../mock/UserProvider'
import MenuCard from '../../components/MenuCard'

const App = (props) => {
  let {user} = useUser();

  let sampleMenu = [
    ["Main Entree", ["Orange Beef with Broccoli"]],
    ["Vegan", ["Pan-Asian Orange Tofu"]],
    ["Soups", ["Cream of Mushroom Soup", "Minestrone Soup"]],
    ["Salad Bar", ["Fresh Fruit Salad"]]
  ]

  let sampleMenu2 = [
    ["Main Entree", ["Southern Fried Chicken"]],
    ["Vegan", ["Baked Macaroni & Cheese"]],
    ["Soups", ["Italian Wedding Soup", "Split Pea Soup"]],
    ["Grill", ["Grilled Chicken","Onion Rings"]],
    ["Dessert", ["Chocolate Cake"]]
  ]

  let resColleges = [
    {
      name: "Whitman",
      menu: sampleMenu
    },
    {
      name: "Wucox",
      menu: sampleMenu2
    },
    {
      name: "Forbes",
      menu: sampleMenu
    }
  ]

  return <Pane>
    <Pane
      display="flex"
      paddingY={20}
      justifyContent="center" 
      width="100%"
    >
        <p>
          Hello there, <b>{`${user.name}`}</b>
        </p>
     </Pane>
    <Pane 
      display="flex" 
      width="100%" 
      justifyContent="center"
      flexWrap="wrap"
    >
      {/* 
      Don't know what .map does? Here's an example:

      for an array arr = [1, 2, 3]
      
      running arr.map(item => <b>{item}</b>)
          
      will produce:
      <b>1</b>
      <b>2</b>
      <b>3</b>
      */}
      { resColleges.map(resCollege => 
          <MenuCard college={resCollege.name} menu={resCollege.menu}/>
        )
      }
    </Pane>
  </Pane>;
}

export default App;