import { FormEvent, useState } from "react";
import { ISchoolInput } from "./Interfaces";
import EducationDataInput from "./EducationDataInput";
import EducationDataView from "./EducationDataView";

export default function EducationData() {
  const [singleSchool, setSingleSchool] = useState<ISchoolInput>({
    name: "",
    start: "",
    end: "",
  });
  const [allSchools, setAllSchools] = useState<ISchoolInput[]>([]);

  const addSchool = (e: FormEvent) => {
    e.preventDefault();
    // console.log(singleSchool);
    setAllSchools([...allSchools, singleSchool]);
    // console.log(allSchools);
    setSingleSchool({ name: "", start: "", end: "" });
  };
  const removeSchool = (name: string) => {
    console.log("test delete", name);

    setAllSchools((prevSchools) => {
      return prevSchools.filter((school) => {
        return school.name !== name;
      });
    });
  };
  const changeButton = () => {
    setShowForm(!showForm);
  };
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="educationData">
      <h2>School Career</h2>
      {!showForm && (
        <button className="addToTimeLine" onClick={() => changeButton()}>
          <i className="fa-solid fa-square-plus"></i>
        </button>
      )}
      {showForm && (
        <button className="addToTimeLine" onClick={() => changeButton()}>
          <i className="fa-solid fa-square-minus"></i>
        </button>
      )}
      {showForm && (
        <EducationDataInput
          school={singleSchool}
          setSchool={setSingleSchool}
          addSchool={addSchool}
        />
      )}
      <EducationDataView schools={allSchools} remove={removeSchool} />
    </div>
  );
}
