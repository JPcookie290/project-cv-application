import { FormEvent, useRef, useState } from "react";
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

  const firstNameInput = useRef<HTMLInputElement | null>(null);
  const lastNameInput = useRef<HTMLInputElement | null>(null);
  const birthdayInput = useRef<HTMLInputElement | null>(null);
  const streetInput = useRef<HTMLInputElement | null>(null);
  const zipCodeInput = useRef<HTMLInputElement | null>(null);
  const countryInput = useRef<HTMLInputElement | null>(null);
  const emailInput = useRef<HTMLInputElement | null>(null);
  const phonenNumberInput = useRef<HTMLInputElement | null>(null);

  const [personalData, setPersonalData] = useState(userInputData);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPersonalData({
      ...personalData,
      firstname: firstNameInput.current?.value,
      lastname: lastNameInput.current?.value,
      birthday: birthdayInput.current?.value,
      street: streetInput.current?.value,
      zipCode: zipCodeInput.current?.value,
      country: countryInput.current?.value,
      email: emailInput.current?.value,
      phone: phonenNumberInput.current?.value,
    });
  };

  return (
    <>
      <form onSubmit={(e) => handleData(e, personalData)}>
        <button type="submit">save</button>
        <div>
          <label>First Name:</label>
          <input type="text" ref={firstNameInput} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" ref={lastNameInput} />
        </div>
        <div>
          <label>Birthdate:</label>
          <input type="date" ref={birthdayInput} />
        </div>
        <div>
          <label>Street:</label>
          <input type="text" ref={streetInput} />
        </div>
        <div>
          <label>ZIP-Code:</label>
          <input type="number" ref={zipCodeInput} />
        </div>
        <div>
          <label>County:</label>
          <input type="text" ref={countryInput} />
        </div>
        <div>
          <label>E-Mail:</label>
          <input type="email" ref={emailInput} />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="string" ref={phonenNumberInput} />
        </div>
      </form>
      <PersonalDataView data={personalData} />
    </>
  );
}
