import { Select, Option } from "@material-tailwind/react";
import { useContext } from "react";
import { CharacterContext } from "../../../utils/context/character";
const races = [
  {
    id: 1,
    name: "Elf",
    description: "Graceful, long-lived, and magical.",
    base_speed: 30,
    base_darkvision: 30,
    size: "Medium",
  },
  {
    id: 2,
    name: "Dwarf",
    description: "Sturdy, resilient, and tough.",
    base_speed: 25,
    base_darkvision: 5,
    size: "Medium",
  },
  {
    id: 3,
    name: "Human",
    description: "Versatile and adaptable.",
    base_speed: 30,
    base_darkvision: 5,
    size: "Medium",
  },
];
const subraces = [
  {
    id: 1,
    race_id: 1,
    name: "High Elf",
    description: "Magical, more inclined to arcane.",
    additional_speed: 0,
    additional_darkvision: 0,
  },
  {
    id: 2,
    race_id: 1,
    name: "Wood Elf",
    description: "Agile, naturalists.",
    additional_speed: 5,
    additional_darkvision: 0,
  },
  {
    id: 3,
    race_id: 2,
    name: "Hill Dwarf",
    description: "Hardy and wise.",
    additional_speed: 0,
    additional_darkvision: 0,
  },
  {
    id: 4,
    race_id: 2,
    name: "Mountain Dwarf",
    description: "Strong and durable.",
    additional_speed: 0,
    additional_darkvision: 0,
  },
];
export default function RaceForm() {
  const { character, setCharacter } = useContext(CharacterContext);
  const handleRaceChange = (e) => {
    setCharacter({ ...character, race: JSON.parse(e), subrace: {} });
  };
  const handleSubRaceChange = (e) => {
    setCharacter({ ...character, subrace: JSON.parse(e) });
  };
  return (
    <>
      <Select label="Select Race" onChange={handleRaceChange}>
        {races.map((race) => (
          <Option key={race.id} value={JSON.stringify(race)}>
            {race.name}
          </Option>
        ))}
      </Select>
      <Select label="Select Subrace" onChange={handleSubRaceChange}>
        {subraces
          .filter((sub) => {
            return sub.race_id === character.race.id;
          })
          .map((sub) => {
            return (
              <Option key={sub.id} value={JSON.stringify(sub)}>
                {sub.name}
              </Option>
            );
          })}
      </Select>
    </>
  );
}
