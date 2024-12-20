import { Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { CharacterContext } from "../../utils/context/character";
import Basic from "./Table/Basic";
import Attributes from "./Table/Attributes";
import Skills from "./Table/Skills";
import Features from "./Table/Features";
export default function Table() {
  const { character } = useContext(CharacterContext);
  // if (loading) return <div>Loading...</div>;
  return (
    <>
      <div className="border-4 px-2">
        <Basic />
        <div className="border-t-4">
          <Attributes />
        </div>
        <div className="border-t-4">
          <Skills />
          <div className=" grid grid-cols-2 gap-x-2 border-t-4">
            <div>
              <div>Equipment</div>
              <div>Proficencies</div>
              <div className="flex justify-between">
                <div>Armor</div>
                <div>x3</div>
              </div>
            </div>
            <div>
              <div>Saving Throw Bonus</div>
              <div>
                {" "}
                <div className="grid grid-cols-5">
                  {character.attributes.map((att, index) => {
                    return (
                      <div key={index}>
                        <Typography>{att.attribute.name}</Typography>
                        <Typography>{att.value}</Typography>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-4">
            <div>features</div>
            <Features />
          </div>
        </div>
      </div>
    </>
  );
}
