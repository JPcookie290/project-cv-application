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
    console.log(singleSchool);
    setAllSchools([...allSchools, singleSchool]);
    console.log(allSchools);
  };
  const removeSchool = (name: string) => {
    console.log("test delete", name);

    setAllSchools((prevSchools) => {
      return prevSchools.filter((school) => {
        return school.name !== name;
      });
    });
  };
  return (
    <>
      <h2>School Career</h2>
      <EducationDataInput
        school={singleSchool}
        setSchool={setSingleSchool}
        addSchool={addSchool}
      />
      <EducationDataView schools={allSchools} remove={removeSchool} />
    </>
  );
}
