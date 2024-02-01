import { ChangeEvent, useState } from "react";
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
    setDetail(!showDetail);
  };
  const [showForm, setShowForm] = useState(true);
  const [showDetail, setDetail] = useState(false);
  const changeInput = (e: ChangeEvent<HTMLInputElement>, type: string) => {
    setPersonalData({ ...personalData, [type]: e?.target?.value });
    //console.log(e);
  };

  return (
    <div className="personalData">
      {showForm && (
        <button className="editBtn" onClick={() => changeButton()}>
          Safe
        </button>
      )}
      {!showForm && (
        <button className="editBtn" onClick={() => changeButton()}>
          Edit
        </button>
      )}
      {showForm && <PersonalDataInput handleData={changeInput} />}
      {showDetail && <PersonalDataView data={personalData} />}
    </div>
  );
}
