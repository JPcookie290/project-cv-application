import { useState } from "react";
import PersonalDataInput from "./components/PersonalDataInput";

function App() {
  const changeButton = () => {
    console.log("test1");
    setShowForm(!showForm);
  };
  const [showForm, setShowForm] = useState(false);
  const handleData = (event: Event, data: any) => {
    event.preventDefault();
    console.log(data);
  };
  return (
    <>
      <button onClick={() => changeButton()}>Edit</button>
      {showForm && <PersonalDataInput handleData={handleData} />}
    </>
  );
}

export default App;
