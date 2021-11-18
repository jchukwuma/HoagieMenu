import { Pane, Card, Button, Menu } from "evergreen-ui";
import Link from "next/link";
import { useUser } from '../../mock/UserProvider'
import MenuCard from '../../components/MenuCard'
import fetch from 'node-fetch'
import useSWR from 'swr'

const fetcher = url => fetch(url).then(r => r.json())

const App = (props) => {
  let {user} = useUser();
  const { data, error } = useSWR('/api/menus', fetcher)

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
      {}
      { data && data.colleges.map(resCollege => 
          <MenuCard college={resCollege.name} menu={resCollege.menu}/>
        )
      }
    </Pane>
  </Pane>;
}

export default App;