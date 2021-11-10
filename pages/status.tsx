import { useRouter } from 'next/router'
import { Pane } from 'evergreen-ui'
import fetch from 'unfetch'
import useSWR from 'swr'

const fetcher = url => fetch(url).then(r => r.json())

const Post = () => {
  const { data, error } = useSWR('/api/status', fetcher)

  return <Pane
    width="100%"
    display="flex"
    justifyContent="center"
    padding={20}
  >
      { !error && data && 
        <Pane>
            <b>Current Status is: </b>{data.status}<br />
            <b>Server Message: </b>{data.message}
        </Pane>
      }
    </Pane>
}

export default Post
