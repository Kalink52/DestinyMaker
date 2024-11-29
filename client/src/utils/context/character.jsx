import { createContext, useState } from "react";
const CharacterContext = createContext();
const DEFAULTCHARACTER = {
  id: "1",
  name: "Elanore",
  health: 13,
  speed: null,
  level: 1,
  darkvision: 60,
  race: {
    id: "1",
    description: "Graceful, long-lived, and magical.",
    base_speed: 30,
    base_darkvision: 60,
  },
  subrace: {
    id: "2",
    race_id: 1,
    name: "Wood Elf",
    description: "Agile, naturalists.",
    additional_speed: 5,
    additional_dark_vision: null,
  },
  class: {
    id: "3",
    name: "Rogue",
    description: "Sneaky, dexterous, and resourceful.",
    base_health: 8,
    health_per_level: 5,
    spellcasting_ability: null,
    proficiencies: "Light Armor, Thieves' Tools",
  },
  background: {
    id: "2",
    name: "Soldier",
    description: "Trained in military skills.",
    skill_proficiencies: "Athletics, Intimidation",
  },
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
      value: 13,
    },
    {
      attribute: {
        id: "6",
        name: "Charisma",
        description: "Charm, influence, personality.",
      },
      value: 15,
    },
  ],
};

const CharacterProvider = ({ children }) => {
  const [character, setCharacter] = useState(DEFAULTCHARACTER);
  console.log(character);
  return (
    <CharacterContext.Provider value={{ character, setCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};
export { CharacterProvider, CharacterContext };
