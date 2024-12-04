import { Typography, Tooltip } from "@material-tailwind/react";
import { useContext } from "react";
import { CharacterContext } from "../../../utils/context/character";
export default function Basic() {
  const { character, abilityModifier } = useContext(CharacterContext);
  return (
    <>
      <div className="text-center">
        <Typography>{character.name}</Typography>
        <Typography>
          Level {character.level} {character.subrace.name} {character.race.name}{" "}
          {character.class.name}
        </Typography>
        <div className="grid grid-cols-6">
          {character.attributes.map((att, index) => {
            return (
              <div key={index}>
                <Tooltip content={att.attribute.description} placement="top">
                  <Typography>{att.attribute.name}</Typography>
                </Tooltip>
                <Typography>
                  {att.value} (
                  {
                    abilityModifier?.find((ability) => {
                      return ability.name === att.attribute.name;
                    }).value
                  }
                  ){" "}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
