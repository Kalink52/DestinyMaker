// import Inputs from "../components/CharacterDetails/Inputs";
import Table from "../components/CharacterDetails/Table";
import CharacterForm from "../components/CharacterDetails/CharacterForm";
import { TraitContext } from "../utils/context/trait";
import { useContext } from "react";
// import Inputs from "../components/CharacterDetails/inputs";

export default function Home() {
  const { loading } = useContext(TraitContext);
  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-2 grid-flow-row w-full p-5 gap-5">
      <div>
        <CharacterForm />
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
}
