import { Pane } from "evergreen-ui";
import useUser from "../../components/Fake"

export default (() => {
  let {user} = useUser();
  return <Pane>Hello, {user.name}</Pane>;
});