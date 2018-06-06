import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route, Link  } from 'react-router-dom'
import Loadable from 'react-loadable'

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const ChartBarLoadableComponent = Loadable({
    loader: () => import(/* webpackPrefetch: true */ './ChartBar'),
    loading: () => <div>loading</div>,
});

const AboutLoadableComponent = Loadable({
    loader: () => import(/* webpackPrefetch: true */ './About'),
    loading: () => <div>loading</div>,
});


class App extends React.Component {
    render () {
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

                    <Route exact path="/" render={Home} />
                    <Route path="/chartbar" component={ChartBarLoadableComponent} />
                    <Route path="/about" component={AboutLoadableComponent} />
                </div>
            </Router>
        )
    }
}

render(<App/>, document.getElementById("app"))