interface Props {
  age: number;
  country: Country;
  email: string;
  github: string;
  linkedin: string;
  isAvailable: boolean;
  skills: string[];
}

export enum Country {
  Netherlands = "Netherlands",
  Canada = "Canada",
  France = "France",
}

export const User = (props: Props) => {
  const age = <h3>age: {props.age}</h3>;
  const country = <h3>country: {props.country}</h3>;
  const email = <h3>email: {props.email}</h3>;
  const github = <h3>github: {props.github}</h3>;
  const linkedin = <h3>linkedin: {props.linkedin}</h3>;
  const isAvailable = (
    <h3>I {props.isAvailable ? "am" : "am not"} available to work now</h3>
  );
  return (
    <div className="profile">
      {isAvailable}
      {age}
      {country}
      {email}
      {github}
      {linkedin}
      <h3>Skills:</h3>
      {props.skills.map((skill: string) => (
        <h3>{skill}</h3>
      ))}
    </div>
  );
};
