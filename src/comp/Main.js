import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
    </Switch>
  </div>
)

export default Main;
