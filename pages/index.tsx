import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Pane, majorScale, minorScale, Spinner, ArrowLeftIcon, Button, InfoSignIcon } from 'evergreen-ui'
import Link from 'next/link'
import AuthButton from '../lib/hoagie-ui/AuthButton'
import { useUser } from '../mock/UserProvider'

export default function Index() {
  const { user, error, isLoading } = useUser();
  let Profile;
  if (isLoading) Profile = <Spinner />;
  else if (error) Profile = <div>{error.message}</div>;
  else if (user) Profile = <Pane>
      <Link href='/app'><Button
        height={56}
        width={majorScale(35)}
        appearance="primary"
        marginBottom={20}
        iconBefore={InfoSignIcon}
      >
          Enter Application
      </Button></Link><br />
      <AuthButton variant="logout" />
    </Pane>;
  else Profile = <AuthButton />

  const router = useRouter()
  useEffect(() => {
      const queryParams = new URLSearchParams(location.search)

      if (queryParams.has('code')) {
        queryParams.delete('code')
        queryParams.delete('state')
        router.replace("/", undefined, { shallow: true })
      }
    }, [])
    return (
      <Pane display="flex" justifyContent="center" alignItems="center" 
      marginX={majorScale(1)}
      paddingBottom={majorScale(4)}
      paddingTop={majorScale(8)}
      >
        <Pane 
            borderRadius={20} 
            textAlign="center" 
            elevation={1} 
            background="white" 
            marginX={20} 
            maxWidth="600px" 
            width="100%"
            paddingX="10px"
            paddingTop={majorScale(5)}
            paddingBottom={majorScale(7)}>
            <InfoSignIcon size={100} color="gray800"/>
            <h1 className="h1">Welcome to Hoagie Test App!</h1>
          <p>This is a test</p>
          <div>
          <Pane 
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginTop="30px"
          >
          { Profile }
          <Link href='https://hoagie.io'><Button
            height={56}
            width={majorScale(35)}
            appearance="default"
            marginTop={20}
            iconBefore={ArrowLeftIcon}
          >
              Back to  <Pane marginLeft={minorScale(1)} marginTop="-3px">
                    hoagie<b>platform</b>
                </Pane>
          </Button></Link><br />
          </Pane>
        </div>
        </Pane>
      </Pane>
    );
}
