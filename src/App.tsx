import PersonalData from "./components/PersonalData";
import EducationData from "./components/EducationData";
import WorkHistoryData from "./components/WorkHistoryData";
import "./App.css";
function App() {
  return (
    <>
      <header>
        <h1 className="headingApp">CV - Application</h1>
      </header>
      <div className="container">
        <PersonalData />
        <div className="history">
          <WorkHistoryData />
          <EducationData />
        </div>
      </div>
    </>
  );
}

export default App;
