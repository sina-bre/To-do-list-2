import { useEffect } from "react";
import { useState, useReducer } from "react";
const initial = {
  name: "",
  LName: "",
  age: "",
  id: "",
  city: "",
  education: "",
  score: "",
  nationality: "",
  height: "",
  weight: "",
  hairColor: "",
  isUpdate: false,
  data: [],
  mainIndex: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };
    case "setLName":
      return { ...state, LName: action.payload };
    case "setAge":
      return { ...state, age: action.payload };
    case "setId":
      return {
        ...state,
        id: Math.floor(Math.random() * 999999) + 1000000,
      };
    case "setCity":
      return { ...state, city: action.payload };
    case "setEduction":
      return { ...state, education: action.payload };
    case "setScore":
      return { ...state, score: action.payload };
    case "setNationality":
      return { ...state, nationality: action.payload };
    case "setHeight":
      return { ...state, height: action.payload };
    case "setWeight":
      return { ...state, weight: action.payload };
    case "setHairColor":
      return { ...state, hairColor: action.payload };
    case "setData":
      const obj = {
        name: state.name,
        LName: state.LName,
        age: state.age,
        id: state.id,
        city: state.city,
        education: state.education,
        score: state.score,
        nationality: state.nationality,
        height: state.height,
        weight: state.weight,
        hairColor: state.hairColor,
      };
      return { ...state, data: [...state.data, obj] };
    case "clear":
      return {
        ...state,
        name: "",
        LName: "",
        age: "",
        id: "",
        city: "",
        education: "",
        score: "",
        nationality: "",
        height: "",
        weight: "",
        hairColor: "",
      };
    case "change":
      return {
        ...state,
        name: state.data[action.index].name,
        LName: state.data[action.index].LName,
        age: state.data[action.index].age,
        city: state.data[action.index].city,
        education: state.data[action.index].education,
        score: state.data[action.index].score,
        nationality: state.data[action.index].nationality,
        height: state.data[action.index].height,
        weight: state.data[action.index].weight,
        hairColor: state.data[action.index].hairColor,
        id: state.data[action.index].id,
        mainIndex: action.index,
        isUpdate: true,
      };
    case "update":
      const obj2 = {
        name: state.name,
        LName: state.LName,
        age: state.age,
        id: state.id,
        city: state.city,
        education: state.education,
        score: state.score,
        nationality: state.nationality,
        height: state.height,
        weight: state.weight,
        hairColor: state.hairColor,
      };
      state.data.splice(state.mainIndex, 1, obj2);
      return {
        ...state,
        data: state.data,
        isUpdate: false,
      };
    case "delete":
      console.log(action.index);
      return {
        ...state,
        data: state.data.filter((item, index) => {
          console.log(index);
          return index !== action.index;
        }),
      };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    console.log(state.data);
  }, [state.data]);

  return (
    <>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={state.name}
          onChange={(e) => {
            dispatch({ type: "setName", payload: e.target.value });
          }}
        />
      </div>
      <div>
        <label>Last name:</label>
        <input
          type="text"
          value={state.LName}
          onChange={(e) => {
            dispatch({ type: "setLName", payload: e.target.value });
          }}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          value={state.age}
          onChange={(e) => {
            dispatch({ type: "setAge", payload: e.target.value });
          }}
        />
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          value={state.city}
          onChange={(e) => {
            dispatch({ type: "setCity", payload: e.target.value });
          }}
        />
      </div>
      <div>
        <label>Eduction:</label>
        <input
          type="text"
          value={state.education}
          onChange={(e) => {
            dispatch({ type: "setEduction", payload: e.target.value });
          }}
        />
      </div>
      <div>
        <label>Score:</label>
        <input
          type="number"
          value={state.score}
          onChange={(e) => {
            dispatch({ type: "setScore", payload: e.target.value });
          }}
        />
      </div>
      <div>
        <label>Nationality:</label>
        <input
          type="text"
          value={state.nationality}
          onChange={(e) => {
            dispatch({ type: "setNationality", payload: e.target.value });
          }}
        />
      </div>
      <div>
        <label>Height:</label>
        <input
          type="text"
          value={state.height}
          onChange={(e) => {
            dispatch({ type: "setHeight", payload: e.target.value });
          }}
        />
      </div>
      <div>
        <label>Weight:</label>
        <input
          type="text"
          value={state.weight}
          onChange={(e) => {
            dispatch({ type: "setWeight", payload: e.target.value });
          }}
        />
      </div>
      <div>
        <label>HairColor:</label>
        <input
          type="text"
          value={state.hairColor}
          onChange={(e) => {
            dispatch({ type: "setHairColor", payload: e.target.value });
          }}
        />
      </div>
      {state.isUpdate ? (
        <button
          onClick={() => {
            dispatch({ type: "update" });
            dispatch({ type: "clear" });
          }}
        >
          Update
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch({ type: "setId" });
            dispatch({ type: "setData" });
            dispatch({ type: "clear" });
          }}
        >
          Add
        </button>
      )}
      {state.data.map((user, index) => (
        <div key={index}>
          <h4>
            {index}.{" "}
            <a
              href="#"
              onClick={() => {
                dispatch({ type: "change", index: index });
              }}
            >
              {" "}
              id :{user.id}
            </a>{" "}
            , Name :{user.name} , Age :{user.age} ,{" "}
            <button
              onClick={() => {
                dispatch({ type: "delete", index: index });
              }}
            >
              Delete
            </button>
          </h4>
        </div>
      ))}
    </>
  );
}

export default App;
