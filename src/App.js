import BouncyLoad from './BouncyLoader/BouncyLoad';
import Smooth from './LoaderRecipes/Smooth';
import "./App.css"

function App() {
  return (
    <div className="body">
      <BouncyLoad/>
      <Smooth/>
    </div>
  );
}

export default App;
