import { useState } from "react";

interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
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


export const Person = (props: Props) => {

  const [x, setName] =useState<string>("X");

  return (
    <div>
      <h1>Name: {props.name} </h1>
      <h1>Email: {props.email} </h1>
      <h1>Age: {props.age} </h1>
      <h1>This person {props.isMarried ? "is" : "is not"} MARRIED </h1>
      <h1> Friends: </h1>
      {props.friends.map((friend: string) => (
        <h1> {friend + " " + x} </h1>
      ))}


      <h1> Country: {props.country} </h1>
      <h1> Setup: {props.setup}</h1>
    </div>
  );
};
