import React from "react";
import Video1 from "../views/Video1";
import Video2 from "../views/Video2";
import HomeLightAnimation from "../views/all-home-version/HomeLightAnimation";
import HomeTyperCreative from "../views/all-home-version/HomeTyperCreative";
import HomeParallaxTyper from "../views/all-home-version/HomeParallaxTyper";
import HomeDarkAnimation from "../views/all-home-version/HomeDarkAnimation";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/Portfolio/wedding-video-1" component={Video1} />
          <Route exact path="/Portfolio/wedding-video-2" component={Video2} />
          {/*<Route exact path="/" component={Preview} />*/}
          {/*<Route exact path="/" component={HomeLightAnimation} />*/}
          {/*<Route exact path="/bou95.github.io" component={HomeLightAnimation} />*/}
          {/*<Route path="/home-light-animation" component={HomeLightAnimation} />*/}
          {/*<Route path="/home-dark-animation" component={HomeDarkAnimation} />*/}
          {/*<Route path="/home-typer-creative" component={HomeTyperCreative} />*/}
          {/*<Route path="/home-parallax-typer" component={HomeParallaxTyper} />*/}
          {/*<Route component={NotFound} />*/}
          <Route exact path="/Portfolio" component={HomeLightAnimation} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
