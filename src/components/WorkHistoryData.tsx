import { FormEvent, useState } from "react";
import WorkHistoryDataInput from "./WorkHistoryDataInput";
import { IWorkInput } from "./Interfaces";
import WorkHistoryDataView from "./WorkHistoryDataView";

export default function WorkHistoryData() {
  const [work, setWork] = useState<IWorkInput>({
    name: "",
    title: "",
    start: "",
    end: "",
  });
  const [workHistory, setWorkHistory] = useState<IWorkInput[]>([]);

  const addWork = (e: FormEvent) => {
    e.preventDefault();
    setWorkHistory([...workHistory, work]);
    console.log(workHistory);
  };
  const removeWork = (name: string, title: string) => {
    setWorkHistory((prevWork) => {
      return prevWork.filter((work) => {
        return work.name + work.title !== name + title;
      });
    });
  };
  return (
    <>
      <h2>Work History</h2>
      <WorkHistoryDataInput work={work} setWork={setWork} addWork={addWork} />
      <WorkHistoryDataView workHistory={workHistory} remove={removeWork} />
    </>
  );
}
