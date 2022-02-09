import NameList from "./components/NameList";
import Search from "./components/Search";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Configuracion from "./components/Configuracion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "./components/Error";
import { useSelector } from "react-redux";
import { selectError } from './features/error/errorSlice';
import ThemeProvider from "./contexts/ThemeContext";


function App() {

  const error = useSelector(selectError);


  return (
    <Router>
      <ThemeProvider>

        <Header />

        <Switch>
          <Route exact path="/">
            <Search />
            {error ? <Error /> : null}
            <NameList />
          </Route>
          <Route exact path="/configuracion">
            <Configuracion />
          </Route>
        </Switch>

        <Footer />
        
      </ThemeProvider>
    </Router>
  );
}

export default App;
