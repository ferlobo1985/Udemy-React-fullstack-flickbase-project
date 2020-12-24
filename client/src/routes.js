import React from 'react';
import { Switch, Route,BrowserRouter} from 'react-router-dom';  
import GoogleFontLoader from 'react-google-font-loader';

import Home from './components/home';

const Routes = () => {
  
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
      <GoogleFontLoader
        fonts={[
          { font:'Roboto', weights: [300,400,900]},
          { font: 'Fredoka One'}
        ]}
      />
    </BrowserRouter>
  )
}

export default Routes;

