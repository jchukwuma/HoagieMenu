import { Pane, Card, Button } from "evergreen-ui";
import Link from "next/link";
import { useUser } from '../../mock/UserProvider'


export default function MenuCard(props) {
    return (  
        <Card 
        backgroundColor="white"
        padding="30px" marginLeft = "30px"
      >
        <h1 className = "h1">{props.college}</h1>
        <Pane>
          <b>Main Entree</b>
          {props.food.mainEntree}
        </Pane>
        <Pane paddingTop = "10px">
          <b>Vegetarian + Vegan Entree</b>
          {props.food.vegan}
        </Pane>
        <Pane paddingTop = "10px">
          <b>Soups</b>
          {props.food.soups}
        </Pane>
        <Pane paddingTop = "10px">
          <b>Salad Bar</b>
          {props.food.saladBar}
        </Pane>
        </Card>
    )
}