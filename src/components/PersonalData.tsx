import { FormEvent, useState } from "react";
import PersonalDataInput from "./PersonalDataInput";
import IUserInput from "./Interfaces";
import PersonalDataView from "./PersonalDataView";

export default function PersonalData() {
  const [personalData, setPersonalData] = useState<IUserInput>({
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
    setShowForm(!showForm);
  };
  const [showForm, setShowForm] = useState(false);
  const handleData = (event: FormEvent, data: IUserInput) => {
    event.preventDefault();
    //console.log("test");

    setPersonalData({
      ...data,
    });
    // console.log(data);
    // console.log(personalData);
  };
  return (
    <>
      <button onClick={() => changeButton()}>Edit</button>
      {showForm && <PersonalDataInput handleData={handleData} />}
      <PersonalDataView data={personalData} />
    </>
  );
}
