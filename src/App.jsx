import "./App.css";
import { CakeViews } from "./feature/cake/CakeViews";
import { IceCreamView } from "./feature/ice-cream/IceCreamView";
import { UserView } from "./feature/users/UserView";

function App() {
  return (
    <div className="App">
      <CakeViews />
      <IceCreamView />
      <UserView />
    </div>
  );
}

export default App;
