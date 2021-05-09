//import pages
import Detail from "./Pages/Detail/Detail";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  { path: "/login", exact: true, component: Login },
  {
    path: "/detail:id",
    extact: true,
    component: Detail,
  },
  { path: "/home", exact: true, component: Home },
];

export { routesHome };
