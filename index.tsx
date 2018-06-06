import React from "react";
import { render } from "react-dom";
import Loadable from "react-loadable";
import { HashRouter as Router, Link, Route  } from "react-router-dom";

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const ChartBarLoadableComponent = Loadable({
    loader: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "ChartBar" */ "./ChartBar"),
    loading: () => <div>loading</div>,
});

const AboutLoadableComponent = Loadable({
    loader: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "About" */ "./About"),
    loading: () => <div>loading</div>,
});

class App extends React.Component {
    public render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/chartbar">ChartBar</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route exact={true} path="/" render={Home} />
                    <Route path="/chartbar" component={ChartBarLoadableComponent} />
                    <Route path="/about" component={AboutLoadableComponent} />
                </div>
            </Router>
        );
    }
}

render(<App/>, document.getElementById("app"));
