import { useContext } from "react";
import { Tooltip } from "@material-tailwind/react";
import { CharacterContext } from "../../../utils/context/character";
export default function Features() {
  const { character } = useContext(CharacterContext);
  console.log(character); // Outputs the current character object
  // console.log(character.race.features); // Outputs the current character object
  return (
    <div>
      <h2>Features</h2>
      <div className="grid grid-cols-2">
        <div className="flex justify-between">
          <div>Race:</div>
          <div>
            {character.race.features?.map((feature) => {
              return (
                <Tooltip
                  key={feature.id}
                  content={feature.description}
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                  className="max-w-96"
                  placement="top"
                >
                  <div key={feature.id}>{feature.name}</div>
                </Tooltip>
              );
            }) || "No features available"}
          </div>
        </div>
      </div>
    </div>
  );
}
