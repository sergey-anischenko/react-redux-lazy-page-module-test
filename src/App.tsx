import React, { ComponentType } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { getLazyPageComponent } from './setup';
import { useSelector } from 'react-redux';

interface IRouteConfig {
  name: string;
  component: ComponentType;
  path: string;
}

const HomePage = () => <h1>Home Page</h1>;

const ROUTES: IRouteConfig[] = [
  {
    name: 'home',
    component: HomePage,
    path: '/',
  },
  {
    name: 'products',
    component: getLazyPageComponent(() => import('./pages/+product-list')),
    path: '/products',
  },
  {
    name: 'about',
    component: getLazyPageComponent(() => import('./pages/+about')),
    path: '/about',
  },
];

const App = () => {
  const store = useSelector(state => state);
  return (
    <div style={{ marginLeft: '20px' }}>
      <ul style={{ margin: 0, padding: 0 }}>
        {ROUTES.map(route => (
          <li style={{ display: 'inline', marginRight: '10px' }}>
            <Link key={route.path} to={route.path}>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
      <Switch>
        {ROUTES.map(route => (
          <Route key={route.path} exact component={route.component} path={route.path} />
        ))}
      </Switch>
      <h3>State:</h3>
      <pre>{JSON.stringify(store, null, 2)}</pre>
    </div>
  );
};

export default App;
