import { Typography } from "@material-tailwind/react";
const attArray = [1, 2, 3, 4, 5];
const skillArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];

import { useContext } from "react";
import { CharacterContext } from "../../utils/context/character";
import Basic from "./Table/Basic";
import Attributes from "./Table/Attributes";
import Skills from "./Table/Skills";
export default function Table() {
  const { character, setCharacter } = useContext(CharacterContext);
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
        </div>
      </div>
    </>
  );
}
