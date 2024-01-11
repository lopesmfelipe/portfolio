import "./App.css";
import { Person, Country, Setup } from "./components/Person";

function App() {
  const getAge = (name: string): number => {
    return 99;
  };

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
