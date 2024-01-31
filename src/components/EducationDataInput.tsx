import { ChangeEvent, FormEvent } from "react";
import { ISchoolInput } from "./Interfaces";

interface Props {
  school: ISchoolInput;
  setSchool: (school: { name: string; start: string; end: string }) => void;
  addSchool: (e: FormEvent<HTMLFormElement>) => void;
}

export default function EducationDataInput({
  school,
  setSchool,
  addSchool,
}: Props) {
  const changeData = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    setSchool({ ...school, [name]: e.target.value });
  };
  return (
    <form onSubmit={addSchool}>
      <div>
        <label>Institution:</label>
        <input
          type="text"
          value={school.name}
          onChange={(e) => changeData(e, "name")}
        />
      </div>
      <div>
        <label>Start:</label>
        <input
          type="date"
          value={school.start}
          onChange={(e) => changeData(e, "start")}
        />
        <label>End:</label>
        <input
          type="date"
          value={school.end}
          onChange={(e) => changeData(e, "end")}
        />
      </div>
      <button type="submit">add</button>
    </form>
  );
}
