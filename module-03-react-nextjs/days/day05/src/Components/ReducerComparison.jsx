import { useReducer, useState } from "react";

function formReducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.value };

    case "email":
      return { ...state, email: action.value };

    case "age":
      return { ...state, age: action.value };

    case "reset":
      return { name: "", email: "", age: "" };

    default:
      return state;
  }
}

export default function ReducerComparison() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const [state, dispatch] = useReducer(formReducer, {
    name: "",
    email: "",
    age: ""
  });

  return (
    <div>
      <h2>useState</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <h2>useReducer</h2>

      <input
        placeholder="Name"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "name", value: e.target.value })
        }
      />

      <input
        placeholder="Email"
        value={state.email}
        onChange={(e) =>
          dispatch({ type: "email", value: e.target.value })
        }
      />

      <input
        placeholder="Age"
        value={state.age}
        onChange={(e) =>
          dispatch({ type: "age", value: e.target.value })
        }
      />
    </div>
  );
}