export default interface IUserInput {
  firstname?: string;
  lastname?: string;
  birthday?: string;
  street?: string;
  zipCode?: string;
  country?: string;
  email?: string;
  phone?: string;
}

interface ISchoolInput {
  name: string;
  start: string;
  end: string;
}

interface IWorkInput {
  name: string;
  title: string;
  start: string;
  end: string;
}

export type { ISchoolInput, IWorkInput };
