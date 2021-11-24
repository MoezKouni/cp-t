import * as components from "./components";
import { useSelector } from "react-redux";
import "./App.css";
import "./overrides.css";

function App() {
  const state = useSelector((state: gobalStateI) => state.layout);
  return (
    <div>
      {state.structure
        .filter((el: ComponentI) => el.displayed)
        .map((el: ComponentI, i: number) => {
          const DynamicComponent = components.default[el.component];
          return <DynamicComponent key={i} component={el} />;
        })}
    </div>
  );
}

export default App;
