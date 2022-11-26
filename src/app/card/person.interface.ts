export interface IPerson{
  id: number,
  name: string,
  username: string,
  img: string,
  email: string,
  employed: boolean,
  salary: number,
  phone: string,
  company: ICompany
}

export interface ICompany{
    name: string,
    catchPhrase: string,
}