import { useContext } from "react";
import { CharacterContext } from "../../../utils/context/character";
import { TraitContext } from "../../../utils/context/trait";
import { Select, Option } from "@material-tailwind/react";
export default function BackgroundForm() {
  const { character, setCharacter } = useContext(CharacterContext);
  const { traits } = useContext(TraitContext);
  const { background: backgrounds } = traits;
  const handleChange = (e) => {
    setCharacter({ ...character, background: JSON.parse(e) });
  };
  return (
    <>
      <Select
        label="select Background"
        onChange={handleChange}
        defaultValue={character?.background.name || "null"}
      >
        {backgrounds.map((background) => {
          return (
            <Option key={background.id} value={JSON.stringify(background)}>
              {background.name}
            </Option>
          );
        })}
      </Select>
    </>
  );
}
