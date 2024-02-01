import { ISchoolInput } from "./Interfaces";
interface Props {
  schools: ISchoolInput[];
  remove: (name: string) => void;
}
export default function EducationDataView({ schools, remove }: Props) {
  const checkDate = (date: string) => {
    if (date === "") {
      return "current";
    } else {
      return date;
    }
  };
  return (
    <table>
      <tr>
        <th>Institute</th>
        <th>Start</th>
        <th>End</th>
        <th></th>
      </tr>
      {schools.map((school) => (
        <tr key={school.name}>
          <td>{school.name}</td>
          <td>{school.start}</td>
          <td>{checkDate(school.end)}</td>
          <td>
            <button onClick={() => remove(school.name)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
}
