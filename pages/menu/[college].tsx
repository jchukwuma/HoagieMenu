import { useRouter } from 'next/router'
import { Pane } from 'evergreen-ui'
import MenuCard from '../../components/MenuCard'

const Post = () => {
  const router = useRouter()
  const { college } = router.query

  return <Pane
    width="100%"
    display="flex"
    justifyContent="center"
    padding={20}
  >
      <MenuCard college={ college && college.toString().toUpperCase() } menu={[]}/>
    </Pane>
}

export default Post
