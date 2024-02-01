import IUserInput from "./Interfaces";

interface Props {
  data: IUserInput;
}

export default function PersonalDataView({ data }: Props) {
  return (
    <div className="personalInfo">
      <div className="twoEntries">
        <h1>
          {data.firstname} {data.lastname}
        </h1>
        <div>
          <h3>Date of Birth</h3>
          <h2>{data.birthday}</h2>
        </div>
      </div>

      <div className="twoEntries">
        <div>
          <h3>E-Mail</h3>
          <h2>{data.email}</h2>
        </div>
        <div>
          <h3>Phone</h3>
          <h2>{data.phone}</h2>
        </div>
      </div>

      <div>
        <h3>Address</h3>
        <h2>
          {data.street}, {data.zipCode} {data.country}
        </h2>
      </div>
    </div>
  );
}
