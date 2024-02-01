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
    //console.log(workHistory);
    setWork({ name: "", title: "", start: "", end: "" });
  };
  const removeWork = (name: string, title: string) => {
    setWorkHistory((prevWork) => {
      return prevWork.filter((work) => {
        return work.name + work.title !== name + title;
      });
    });
  };
  const changeButton = () => {
    setShowForm(!showForm);
  };
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="workData">
      <h2>Work History</h2>
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
        <WorkHistoryDataInput work={work} setWork={setWork} addWork={addWork} />
      )}
      <WorkHistoryDataView workHistory={workHistory} remove={removeWork} />
    </div>
  );
}
