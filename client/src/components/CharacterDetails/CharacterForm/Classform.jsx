import { Select, Option } from "@material-tailwind/react";
import { useContext } from "react";
import { CharacterContext } from "../../../utils/context/character";

const classes = [
  {
    id: 1,
    name: "Fighter",
    description: "Skilled in combat, adaptable.",
    base_health: 10,
    health_per_level: 6,
    spellcasting_ability: null,
    proficiencies: "Light Armor, Martial Weapons",
  },
  {
    id: 2,
    name: "Wizard",
    description: "Masters of arcane magic.",
    base_health: 6,
    health_per_level: 4,
    spellcasting_ability: "Intelligence",
    proficiencies: "Quarterstaff, Daggers",
  },
  {
    id: 3,
    name: "Rogue",
    description: "Sneaky, dexterous, and resourceful.",
    base_health: 8,
    health_per_level: 5,
    spellcasting_ability: null,
    proficiencies: "Light Armor, Thieves' Tools",
  },
];
export default function ClassForm() {
  const { character, setCharacter } = useContext(CharacterContext);
  const handleChange = (e) => {
    console.log(e);
    setCharacter({ ...character, class: JSON.parse(e) });
  };
  return (
    <>
      <Select label="Select Class" onChange={handleChange}>
        {classes.map((cla) => (
          <Option key={cla.id} value={JSON.stringify(cla)}>
            {cla.name}
          </Option>
        ))}
      </Select>
    </>
  );
}
