import { Route, Switch } from "react-router-dom"
import Provider from "./context/Provider"
import MainPage from "./pages/MainPage/mainPage"
import Update from "./components/Update/update"


function App() {

  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/update" component={Update} />
      </Switch>
    </Provider>
  )
}

export default App
