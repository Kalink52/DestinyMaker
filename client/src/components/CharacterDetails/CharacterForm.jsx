import NameForm from "./CharacterForm/NameForm";
import RaceForm from "./CharacterForm/RaceForm";
import AttributeForm from "./CharacterForm/AttributeForm";
import ClassForm from "./CharacterForm/ClassForm";
export default function Table() {
  return (
    <div>
      <NameForm />
      <RaceForm />
      <ClassForm />
      <AttributeForm />
    </div>
  );
}
