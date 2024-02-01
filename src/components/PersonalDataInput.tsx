import { ChangeEvent, useState } from "react";
import IUserInput from "./Interfaces";
// import PersonalDataView from "./PersonalDataView";

interface Props {
  handleData: (e: ChangeEvent<HTMLInputElement>, personalData: string) => void;
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
    <form>
      <div className="twoInputBackToBack">
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={personalData.firstname}
            onChange={(e) => {
              changeInput(e, "firstname"), handleData(e, "firstname");
            }}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={personalData.lastname}
            onChange={(e) => (
              changeInput(e, "lastname"), handleData(e, "lastname")
            )}
          />
        </div>
      </div>

      <div>
        <label>Birth Date:</label>
        <input
          type="date"
          value={personalData.birthday}
          onChange={(e) => (
            changeInput(e, "birthday"), handleData(e, "birthday")
          )}
        />
      </div>
      <div className="twoInputBackToBack">
        <div>
          <label>Street:</label>
          <input
            type="text"
            value={personalData.street}
            onChange={(e) => (
              changeInput(e, "street"), handleData(e, "street")
            )}
          />
        </div>
        <div>
          <label>ZIP-Code:</label>
          <input
            type="number"
            value={personalData.zipCode}
            onChange={(e) => (
              changeInput(e, "zipCode"), handleData(e, "zipCode")
            )}
          />
        </div>
      </div>

      <div>
        <label>County:</label>
        <input
          type="text"
          value={personalData.country}
          onChange={(e) => (
            changeInput(e, "country"), handleData(e, "country")
          )}
        />
      </div>
      <div className="twoInputBackToBack">
        <div>
          <label>E-Mail:</label>
          <input
            type="email"
            value={personalData.email}
            onChange={(e) => (changeInput(e, "email"), handleData(e, "email"))}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="string"
            value={personalData.phone}
            onChange={(e) => (changeInput(e, "phone"), handleData(e, "phone"))}
          />
        </div>
      </div>
    </form>
  );
}
