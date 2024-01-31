import { ISchoolInput } from "./Interfaces";
interface Props {
  schools: ISchoolInput[];
  remove: (name: string) => void;
}
export default function EducationDataView({ schools, remove }: Props) {
  return (
    <>
      <h2>School Career</h2>
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
            <td>{school.end}</td>
            <td>
              <button onClick={() => remove(school.name)}>X</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}
