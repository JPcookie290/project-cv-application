import { ChangeEvent, FormEvent, useRef, useState } from "react";
import IUserInput from "./IUserInput";
import PersonalDataView from "./PersonalDataView";

interface Props {
  handleData: (e: FormEvent<HTMLFormElement>, personalData: IUserInput) => void;
}

export default function PersonalDataInput({ handleData }: Props) {
  const userInputData: IUserInput = {
    firstname: "",
    lastname: "",
    birthday: "",
    street: "",
    zipCode: "",
    country: "",
    email: "",
    phone: "",
  };

  const [personalData, setPersonalData] = useState(userInputData);

  const changeInput = (e: ChangeEvent<HTMLInputElement>, type: string) => {
    setPersonalData({ ...personalData, [type]: e?.target?.value });
    //console.log(e);
  };

  return (
    <>
      <form onSubmit={(e) => handleData(e, personalData)}>
        <button type="submit">save</button>zipCode
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={personalData.firstname}
            onChange={(e) => changeInput(e, "firstname")}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={personalData.lastname}
            onChange={(e) => changeInput(e, "lastname")}
          />
        </div>
        <div>
          <label>Birthdate:</label>
          <input
            type="date"
            value={personalData.birthday}
            onChange={(e) => changeInput(e, "birthday")}
          />
        </div>
        <div>
          <label>Street:</label>
          <input
            type="text"
            value={personalData.street}
            onChange={(e) => changeInput(e, "street")}
          />
        </div>
        <div>
          <label>ZIP-Code:</label>
          <input
            type="number"
            value={personalData.zipCode}
            onChange={(e) => changeInput(e, "zipCode")}
          />
        </div>
        <div>
          <label>County:</label>
          <input
            type="text"
            value={personalData.country}
            onChange={(e) => changeInput(e, "country")}
          />
        </div>
        <div>
          <label>E-Mail:</label>
          <input
            type="email"
            value={personalData.email}
            onChange={(e) => changeInput(e, "email")}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="string"
            value={personalData.phone}
            onChange={(e) => changeInput(e, "phone")}
          />
        </div>
      </form>
      <PersonalDataView data={personalData} />
    </>
  );
}
