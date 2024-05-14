import { fetchUser } from "./utils";
import { Logo } from "./Logo";
import "./styles.css";

export default function App() {
  const user = fetchUser();
  console.log(user);
  return (
    <div className="App">
      <nav className="navbar">
        <Logo />

        {/* Write your code : 
          - if the user is not logged in : render a button that says "login"

          - if the user is logged in :
            render a button that says logout and
              - if the user has a username : render a greeting message with the username "Welcome username !"
              - if the user does not have a user name : render "Logged and Please complete your username!""

        */}
      </nav>
    </div>
  );
}
