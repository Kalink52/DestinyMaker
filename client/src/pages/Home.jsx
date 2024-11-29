import { useParams } from "react-router-dom";
// import Inputs from "../components/CharacterDetails/Inputs";
import Table from "../components/CharacterDetails/Table";
import CharacterForm from "../components/CharacterDetails/CharacterForm";
// import Inputs from "../components/CharacterDetails/inputs";

export default function Home() {
  return (
    <div className="grid grid-cols-2 grid-flow-row w-full">
      <div>
        <CharacterForm />
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
}
