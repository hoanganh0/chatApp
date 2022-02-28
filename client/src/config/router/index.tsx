import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoadingGif } from "../commom/icon";
import { RouterConst } from "./const";

export default function AppRouter() {
  const Auth = lazy(() => import("../../pages/auth"));
  const Home = lazy(() => import("../../pages/home"));
  return (
    <Suspense fallback={LoadingGif}>
      <Router>
        <Switch>
          <Route path={RouterConst.authScreen} component={Auth} />
          <Route path={RouterConst.homeScreen} component={Home} />
        </Switch>
      </Router>
    </Suspense>
  );
}
