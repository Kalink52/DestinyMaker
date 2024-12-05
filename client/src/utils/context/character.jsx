import { createContext, useEffect, useState, useReducer } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../graphql/queries";
export const CharacterContext = createContext();
const initialCharacterState = {
  name: null,
  health: null,
  speed: null,
  level: 1,
  race: {},
  subrace: {},
  class: {},
  background: {},
  attributes: [
    {
      attribute: {
        id: "1",
        name: "Strength",
        description: "Physical power and force.",
      },
      value: 8,
    },
    {
      attribute: {
        id: "2",
        name: "Dexterity",
        description: "Agility, reflexes, balance.",
      },
      value: 8,
    },
    {
      attribute: {
        id: "3",
        name: "Constitution",
        description: "Stamina, endurance.",
      },
      value: 8,
    },
    {
      attribute: {
        id: "4",
        name: "Intelligence",
        description: "Reasoning and knowledge.",
      },
      value: 8,
    },
    {
      attribute: {
        id: "5",
        name: "Wisdom",
        description: "Perception and insight.",
      },
      value: 8,
    },
    {
      attribute: {
        id: "6",
        name: "Charisma",
        description: "Charm, influence, personality.",
      },
      value: 8,
    },
  ],
};

console.log("Invalid action type");
function CharacterReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_RACE":
      return { ...state, race: action.payload };
    case "SET_SUBRACE":
      return { ...state, subrace: action.payload };
    case "SET_CLASS":
      return { ...state, class: action.payload };
    case "SET_LEVEL":
      return { ...state, level: action.payload };
    case "SET_SUBCLASS":
      return { ...state, subclass: action.payload };
    case "UPDATE_ATTRIBUTES":
      return {
        ...state,
        attributes: [
          ...state.attributes.slice(0, action.index),
          action.payload,
          ...state.attributes.slice(action.index + 1),
        ],
      };
    default:
      console.log("Invalid action type");
  }
}
export const CharacterProvider = ({ children }) => {
  // const { loading, error, data } = useQuery(GET_CHARACTERS);
  const [abilityModifier, setAbilityModifiers] = useState();
  const [state, dispatch] = useReducer(CharacterReducer, initialCharacterState);
  console.log(state);
  useEffect(() => {
    const calculateAbilityModifiers = () => {
      const modifiers = state.attributes.map((attr) => {
        return {
          name: attr.attribute.name,
          value: Math.floor((attr.value - 10) / 2),
        };
      });
      setAbilityModifiers(modifiers);
    };
    calculateAbilityModifiers();
  }, [state]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;
  return (
    <CharacterContext.Provider
      value={{ character: state, abilityModifier, dispatch }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
