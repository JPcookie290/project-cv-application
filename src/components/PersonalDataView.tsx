import IUserInput from "./Interfaces";

interface Props {
  data: IUserInput;
}

export default function PersonalDataView({ data }: Props) {
  return (
    <div>
      <h1>
        {data.firstname} {data.lastname}
      </h1>
      <h2>Birthday</h2>
      <h3>{data.birthday}</h3>
      <h2>Address</h2>
      <h3>
        {data.street}, {data.zipCode} {data.country}
      </h3>
      <h2>E-Mail</h2>
      <h3>{data.email}</h3>
      <h2>Phone</h2>
      <h3>{data.phone}</h3>
    </div>
  );
}
