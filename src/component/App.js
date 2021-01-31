import react from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LeftMenu from "./LeftMenu/LeftMenu";
import About from "./About/About";
import Resume from "./Resume/Resume";
import Portfolio from "./Portfolio/Portfolio";

class App extends react.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-lg-2">
              <aside className="left-side">
                <LeftMenu />
              </aside>
            </div>

            <div className="col-md-9 col-lg-10">
              <main>
                <Switch>
                  <Route exact path="/" component={About} />
                  <Route path="/resume" component={Resume} />
                  <Route
                    path="/portfolio/:category"
                    component={({ match: { params } }) => {
                      // console.log(props);
                      // console.log(params.category);
                      return <Portfolio category={params.category} />;
                    }}
                  />
                  <Route path="/portfolio" component={Portfolio} />
                </Switch>
              </main>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
