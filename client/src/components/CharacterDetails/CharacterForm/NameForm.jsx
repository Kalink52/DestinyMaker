import { Input } from "@material-tailwind/react";
import { useContext } from "react";
import { CharacterContext } from "../../../utils/context/character";
export default function NameForm() {
  const { character, setCharacter } = useContext(CharacterContext);
  console.log(name);
  const handleChange = (e) => {
    console.log(e.target.value);
    setCharacter({ ...character, name: e.target.value });
  };
  return (
    <>
      <Input onChange={handleChange} defaultValue={character.name} />
    </>
  );
}
