import * as React from "react";
import {Nav} from './Nav'
import {Home} from './Home'
import {Portfolio} from './Portfolio'
import {Footer} from './Footer'

export const App = () => (
  <React.Fragment>
    <Nav/>
    <Home />
    <Portfolio />
    <Footer />
  </React.Fragment>
);
