import {Switch, Route} from 'react-router-dom'
import Form from '../components/Form'
import UserData from '../components/UserData'

export default function Pagination() {
  return (
    <Switch>
      <Route exact path="/" component={Form} />
      <Route exact path="/user-data" component={UserData} />
    </Switch>
  )
}