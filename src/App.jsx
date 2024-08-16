import "./App.css";
import ExpTracker from "./components/expansetracker/ExpTracker";
import FormValidation from "./components/form-validation/FormValidation";
import ProgresBar from "./components/progressbar/ProgresBar";

function App() {
  return (
    <>
      <ProgresBar />
      <ExpTracker />
      <FormValidation />
    </>
  );
}

export default App;
