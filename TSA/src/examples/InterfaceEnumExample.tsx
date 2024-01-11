interface Someone {
  name: string;
  email?: string;
  age: number;
  isMarried: boolean;
  friends: Someone[];
  country: Country;
  setup: Setup;
}

export enum Country {
  Brazil = "Brazil",
  Canada = "Canada",
  France = "France",
}

export enum Setup {
  Pc = "Pc",
  Notebook = "Macbook Pro",
}

export const Person = (props: Someone) => {
  return (
    <div>
      <h1>Name: {props.name} </h1>
      <h1>Email: {props.email} </h1>
      <h1>Age: {props.age} </h1>
      <h1>This person {props.isMarried ? "is" : "is not"} MARRIED </h1>
      <h3> Friends: </h3>
      {props.friends.map((friend: Someone) => (
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



/*
import "./App.css";
import { Person, Country, Setup } from "./components/Person";

function App() {
  

  return (
    <div className="App">
      <Person
        name="Jack Chan"
        age={26}
        isMarried={false}
        friends={[
          { name: "Steve Jobs", email: "stevejobs@apple.com", age: 46, isMarried: false, friends: [], country: Country.Canada, setup: Setup.Notebook },
          { name: "Bill Gates", email: "billgates@microsoft.com", age: 60, isMarried: true, friends: [], country: Country.Canada, setup: Setup.Pc },
          { name: "Elon Musk", email: "ElonMusk@spacex.com", age: 51, isMarried: true, friends: [], country: Country.France, setup: Setup.Pc },
        ]}
        country={Country.Canada}
        setup={Setup.Notebook}
      />
    </div>
  );
}

export default App;
*/
