interface Props {
  name: string;
  email?: string;
  age: number;
  isMarried: boolean;
  friends: Props[];
  country: Country;
  setup: Setup;
}

export enum Country {
  Brazil = "Brazil",
  Canada = "Canada",
  France = "France",
}

export enum Setup {
  Pc = "Pc Computer",
  Notebook = "Macbook Pro",
}

export const Person = (props: Props) => {
  return (
    <div>
      <h1>Name: {props.name} </h1>
      <h1>Email: {props.email} </h1>
      <h1>Age: {props.age} </h1>
      <h1>This person {props.isMarried ? "is" : "is not"} MARRIED </h1>
      <h3> Friends: </h3>
      {props.friends.map((friend: Props) => (
        <>
          <p> {friend.name} </p>
          <p> {friend.email} </p>
          <p> {friend.age} </p>
          <p> Married: {friend.isMarried ? "YES" : "NO"} </p>
          <p>
            {friend.friends.map((friendsOfFriend) => (
              <>
                <p>Name: {friendsOfFriend.name}</p>
                <p>Age: {friendsOfFriend.age}</p>
                <p>
                  Married:{" "}
                  {friendsOfFriend.isMarried
                    ? "YES HE/SHE IS"
                    : "NO HE/SHE IS NOT"}
                </p>
                <p>Setup: {friendsOfFriend.setup}</p>
              </>
            ))}
          </p>
          <p> {friend.setup} </p>
          <p> _____________ </p>
          <br></br>
        </>
      ))}

      <h1> Country: {props.country} </h1>
      <h1> Setup: {props.setup}</h1>
    </div>
  );
};
