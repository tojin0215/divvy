import { BrowserRouter, Route } from 'react-router-dom';
import { Component } from 'react';
import { Home, Login } from '../src/pages';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
