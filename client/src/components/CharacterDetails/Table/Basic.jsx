import { Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { CharacterContext } from "../../../utils/context/character";
export default function Basic() {
  const { character } = useContext(CharacterContext);
  return (
    <>
      <div className="text-center">
        <Typography>{character.name}</Typography>
        <Typography>
          Level 1 {character.subrace.name} {character.race.name}{" "}
          {character.class.name}
        </Typography>
        <div className="grid grid-cols-6">
          {character.attributes.map((att, index) => {
            return (
              <div key={index}>
                <Typography>{att.attribute.name}</Typography>
                <Typography>{att.value} </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
