import { FormEvent, useState } from "react";
import PersonalDataInput from "./components/PersonalDataInput";
import IUserInput from "./components/IUserInput";
import PersonalDataView from "./components/PersonalDataView";

function App() {
  const [personalData, setPersonalData] = useState({
    firstname: "",
    lastname: "",
    birthday: "",
    street: "",
    zipCode: "",
    country: "",
    email: "",
    phone: "",
  });
  const changeButton = () => {
    console.log("test1");
    setShowForm(!showForm);
  };
  const [showForm, setShowForm] = useState(false);
  const handleData = (event: FormEvent, data: IUserInput) => {
    event.preventDefault();
    console.log(data);
  };
  return (
    <>
      <button onClick={() => changeButton()}>Edit</button>
      {showForm && <PersonalDataInput handleData={handleData} />}
      {/* <PersonalDataView data={personalData} /> */}
    </>
  );
}

export default App;
