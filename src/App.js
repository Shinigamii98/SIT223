import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CurrentBookingsPage from "./CurrentBookingsPage";
import OrganizerHomePage from "./OrganizerHomePage";
import OrganizerLoginPage from "./OrganizerLoginPage";
import StudentHomePage from "./StudentHomePage";
import StudentRegisterPage from "./StudentRegisterPage";
import StudentSupportPage from "./StudentSupportPage";
import LandingPage from "./LandingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/CurrentBookingsPage">
          <CurrentBookingsPage />
        </Route>
        <Route path="/OrganizerHomePage">
          <OrganizerHomePage />
        </Route>
        <Route path="/OrganizerLoginPage">
          <OrganizerLoginPage />
        </Route>
        <Route path="/StudentHomePage">
          <StudentHomePage />
        </Route>
        <Route path="/StudentRegisterPage">
          <StudentRegisterPage />
        </Route>
        <Route path="/StudentSupportPage">
          <StudentSupportPage />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
