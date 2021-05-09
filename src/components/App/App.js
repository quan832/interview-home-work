//import route
import { Router, Switch } from "react-router-dom";

//import history
import { createBrowserHistory } from "history";

import { routesHome } from "../../routes";

//template
import HomeTemplate from "../../template/HomeTemplate";
//scroll to top
import ScrollToTop from "./ScrollToTop";

import "./App.css";

export const history = createBrowserHistory();
//Đối tượng giúp chuyển hướng trang bất kì file nào

const showItemHome = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <HomeTemplate
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}
        ></HomeTemplate>
      );
    });
  }
};

function App(props) {
  // get data from local to state

  return (
    <Router history={history}>
      <div className="App">
        <ScrollToTop>
          <Switch>{showItemHome(routesHome)}</Switch>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
