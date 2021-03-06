import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

import ErrorBoundary from './components/error-boundary';
import Navigation from './components/navigation/navigation';
import Footer from './components/footer/Footer';
import AuthPage from './pages/auth/auth-page';
import MainPage from './pages/mainPage';
import SingleMoviePage from './pages/singleMoviePage/single-movie-page';
import DetailedSearchPage from './pages/detailedSearchPage/detailed-search-page';

import './index.css';

function App() {
  return (
    <ErrorBoundary>
      <Navigation></Navigation>
      <Switch>
        <Route path="/movie">
          <SingleMoviePage />
        </Route>
        <Route path="/auth">
          <AuthPage></AuthPage>
        </Route>
        <Route path="/search">
          <DetailedSearchPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
      <Footer></Footer>
    </ErrorBoundary>
  );
}

export default App;
