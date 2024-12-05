import { Input } from "@material-tailwind/react";
import { useContext } from "react";
import { CharacterContext } from "../../../utils/context/character";
export default function NameForm() {
  const { character,  dispatch } = useContext(CharacterContext);
  const handleChange = (e) => {
    dispatch({ type: "SET_NAME", payload: e.target.value });
  };
  return (
    <>
      <Input onChange={handleChange} defaultValue={character.name} />
    </>
  );
}
