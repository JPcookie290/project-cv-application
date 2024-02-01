import { FormEvent, ChangeEvent } from "react";
import { IWorkInput } from "./Interfaces";

interface Props {
  work: IWorkInput;
  setWork: (work: {
    name: string;
    title: string;
    start: string;
    end: string;
  }) => void;
  addWork: (e: FormEvent<HTMLFormElement>) => void;
}

export default function WorkHistoryDataInput({
  work,
  setWork,
  addWork,
}: Props) {
  const changeData = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    setWork({ ...work, [name]: e.target.value });
  };
  return (
    <form onSubmit={addWork}>
      <div>
        <label>Company:</label>
        <input
          type="text"
          value={work.name}
          onChange={(e) => changeData(e, "name")}
        />
      </div>
      <div>
        <label>Job Title:</label>
        <input
          type="text"
          value={work.title}
          onChange={(e) => changeData(e, "title")}
        />
      </div>
      <div className="threeInputBackToBack">
        <div>
          <label>Start:</label>
          <input
            type="date"
            value={work.start}
            onChange={(e) => changeData(e, "start")}
          />
        </div>
        <div>
          <label>End:</label>
          <input
            type="date"
            value={work.end}
            onChange={(e) => changeData(e, "end")}
          />
        </div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
