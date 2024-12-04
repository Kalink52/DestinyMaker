import NameForm from "./CharacterForm/NameForm";
import RaceForm from "./CharacterForm/RaceForm";
import AttributeForm from "./CharacterForm/AttributeForm";
import ClassForm from "./CharacterForm/ClassForm";
import Background from "./CharacterForm/BackgroundForm";
export default function Table() {


  return (
    <div>
      <NameForm />
      <Background />
      <RaceForm />
      <AttributeForm />
      <ClassForm />
    </div>
  );
}
