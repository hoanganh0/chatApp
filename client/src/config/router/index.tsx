import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthScreen from "../../pages/auth";
import { LoadingGif } from "../commom/icon";
import { RouterConst } from "./const";

export default function AppRouter() {
  const Auth = lazy(() => import("../../pages/auth"));
  return (
    <Suspense fallback={LoadingGif}>
      <Router>
        <Switch>
          <Route path={RouterConst.authScreen} component={Auth} />
        </Switch>
      </Router>
    </Suspense>
  );
}
