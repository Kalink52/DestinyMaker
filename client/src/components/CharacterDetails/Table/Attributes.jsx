import { Typography, Tooltip } from "@material-tailwind/react";
import { useContext } from "react";
import { CharacterContext } from "../../../utils/context/character";

export default function Attributes() {
  const { character, abilityModifier } = useContext(CharacterContext);
  const { race, subrace, class: clas } = character;

  const getModifer = (att) => {
    return abilityModifier?.find((ability) => {
      return ability.name === att;
    }).value;
  };

  const hasFeatType = (searchedValue) => {
    const found = race.features?.find((feat) => {
      return feat.type === searchedValue;
    });
    return found;
  };
  const AttributesMap = [
    {
      name: "Hit Points",
      value:
        clas.base_health +
        (clas.health_per_level + getModifer("Constitution")) * character.level -
        clas.health_per_level,
      description: "Hit points depend on your class, race, and level",

      // The formulate here should be
      // base + (scaling * (level-1 ))
    },
    {
      name: "Armor Class",
      value: 10 + getModifer("Dexterity") + " TBD",
      description:
        "Armor class determines your AC, how hard you can be hit by attacks",

      // 10 + Dexterity modifier + armour bonus + shield bonus + other bonuses and penalties
    },
    {
      name: "Initiative",
      value: 10 + getModifer("Dexterity"),
      description: "Initiative determines who goes first in combat",
      // 10 + Dexterity modifier
    },
    {
      name: "Movement Speed",
      value: race?.base_speed + (hasFeatType("Movement Speed")?.value || 0),
      description:
        "Movement speed depends on your race, and any additional speed features you have",
      // add aditional speed if applicable
    },
    {
      name: "DarkVision Range",
      value: hasFeatType("Darkvision")?.value || 5, // default 5
      description:
        "Darkvision allows you to see in the dark, up to a range of 50 feet",
    },
    {
      name: "Size",
      value: race?.size || "TBD",
      description: "Your size affects your carrying capacity and weight class",
      // TBD for now, size should be displayed based on race and class
    },
    {
      name: "Weight",
      value: race?.weight || "TBD",
      description: "Your weight class affects your carrying capacity",
      // TBD for now, weight should be displayed based on race and class
    },
    {
      name: "Carry Capacity",
      value:
        (80 + 20 * getModifer("Strength")) *
        (1 + hasFeatType("Carrying Capacity")?.value / 100 || 1),
      description:
        "Carry capacity depends on your strength, and any additional carrying capacity features you have",
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
              <Tooltip content={att?.description} placement="top">
                <Typography>{att.name}</Typography>
              </Tooltip>
              <Typography>{att.value}</Typography>
            </div>
          );
        })}
        {/* </div> */}
      </div>
    </>
  );
}
