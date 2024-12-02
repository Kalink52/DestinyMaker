import { useContext } from "react";
import { CharacterContext } from "../../../utils/context/character";
export default function Features() {
  const { character } = useContext(CharacterContext);
  console.log(character.race.features); // Outputs the current character object
  return (
    <div>
      <h2>Features</h2>
      <div className="grid grid-cols-2">
        <div>Race:</div>
        <div>
          {character.race?.features.map((feature) => {
            return <div key={feature.id}>{feature.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
