import { useContext } from "react";
import { CharacterContext } from "../../../utils/context/character";
import { TraitContext } from "../../../utils/context/trait";
export default function Skills() {
  const { character, abilityModifier } = useContext(CharacterContext);
  const { traits } = useContext(TraitContext);
  const { background: backgrounds, skill: skills } = traits;
  return (
    <>
      <div>Skills</div>
      <div className="grid grid-cols-2 divide-x-4 ">
        <div className="px-2 ">
          {skills.map((skill, index) => {
            if (index < 9) {
              return (
                <div key={index} className="flex justify-between ">
                  <div>{skill.name}</div>
                  <div>
                    {
                      abilityModifier?.find(
                        (ability) => ability.name === skill.associated_attribute
                      ).value
                    }
                    {}
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="px-2">
          {skills.map((skill, index) => {
            if (index >= 9) {
              return (
                <div key={index} className="flex justify-between ">
                  <div>{skill.name}</div>
                  <div>
                    {
                      abilityModifier?.find(
                        (ability) => ability.name === skill.associated_attribute
                      ).value
                    }
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
