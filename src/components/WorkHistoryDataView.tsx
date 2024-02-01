import { IWorkInput } from "./Interfaces";
interface Props {
  workHistory: IWorkInput[];
  remove: (name: string, title: string) => void;
}

export default function WorkHistoryDataView({ workHistory, remove }: Props) {
  const checkDate = (date: string) => {
    if (date === "") {
      return "current";
    } else {
      return date;
    }
  };
  return (
    <table className="workHistoryList">
      <tr>
        <th>Place of Employment</th>
        <th>Work Title</th>
        <th>Start</th>
        <th>End</th>
        <th></th>
      </tr>
      {workHistory.map((work) => (
        <tr key={work.name + work.title}>
          <td>{work.name}</td>
          <td>{work.title}</td>
          <td>{work.start}</td>
          <td>{checkDate(work.end)}</td>
          <td>
            <button onClick={() => remove(work.name, work.title)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
}
