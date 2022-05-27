import { useEffect, VFC } from 'react';
import {
  Route,
  Routes,
  Link,
  Outlet,
  Navigate,
  useLocation,
} from 'react-router-dom';
import Home from './components/Home';

const Layout: VFC = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>

    <hr />
    <Outlet />
  </div>
);

const App: VFC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [hash, pathname]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
