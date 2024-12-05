import { Select, Option } from "@material-tailwind/react";
import { useContext } from "react";
import { CharacterContext } from "../../../utils/context/character";
import { TraitContext } from "../../../utils/context/trait";
export default function RaceForm() {
  const { traits } = useContext(TraitContext);
  const { character,  dispatch } = useContext(CharacterContext);
  const { race: races, subrace: subraces } = traits;
  const handleRaceChange = (e) => {
    dispatch({ type: "SET_RACE", payload: JSON.parse(e) });
  };
  const handleSubRaceChange = (e) => {
    dispatch({ type: "SET_SUBRACE", payload: JSON.parse(e) });
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
            return sub.race_id == character.race.id;
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
