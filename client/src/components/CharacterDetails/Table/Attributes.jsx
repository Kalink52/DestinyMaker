import { Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { CharacterContext } from "../../../utils/context/character";

export default function Attributes() {
  const { character, abilityModifier } = useContext(CharacterContext);
  const { race, subrace, class: clas } = character;
  const getStrModifier = () => {
    const dex = character.attributes[0].value;
    return Math.floor((dex - 10) / 2);
  };
  const getModifer = (att) => {
    return abilityModifier?.find((ability) => {
      return ability.name === att;
    }).value;
  };
  const AttributesMap = [
    {
      name: "Hit Points",
      value:
        clas.base_health +
        (clas.health_per_level + getModifer("Constitution")) * character.level -
        clas.health_per_level,

      // The formulate here should be
      // base + (scaling * (level-1 ))
    },
    {
      name: "Armor Class",
      value: 10 + getModifer("Dexterity") + " TBD",

      // 10 + Dexterity modifier + armour bonus + shield bonus + other bonuses and penalties
    },
    {
      name: "Initiative",
      value: 10 + getModifer("Dexterity"),
      // 10 + Dexterity modifier
    },
    {
      name: "Movement Speed",
      value: race.base_speed + (subrace.additional_speed || 0),
      // add aditional speed if applicable
    },
    {
      name: "DarkVision Range",
      value: race.base_darkvision + (subrace.additional_darkvision || 0),
      // add aditional darkvision if subrace has it
    },
    {
      name: "Size",
      value: race?.size || "TBD",
    },
    {
      name: "Weight",
      value: race?.weight || "TBD",
    },
    {
      name: "Carry Capacity",
      value: 80 + 20 * getModifer("Strength"),
    },
  ];

  return (
    <>
      <Typography variant="h6">Attributes</Typography>
      <div className="grid grid-rows-5 grid-cols-2 gap-x-4 ">
        {/* <div className="px-2"> */}
        {AttributesMap.map((att) => {
          return (
            <div key={att.name} className="flex justify-between">
              <Typography>{att.name}</Typography>
              <Typography>{att.value}</Typography>
            </div>
          );
        })}
        {/* </div> */}
      </div>
    </>
  );
}
