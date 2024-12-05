import { useContext } from "react";
import { Tooltip } from "@material-tailwind/react";
import { CharacterContext } from "../../../utils/context/character";
import { TraitContext } from "../../../utils/context/trait";
export default function Skills() {
  const { character, abilityModifier } = useContext(CharacterContext);
  const { traits } = useContext(TraitContext);
  const { skill: skills } = traits;
  return (
    <>
      <div>Skills</div>
      <div className="grid grid-rows-9 grid-flow-col gap-x-2 ">
        {skills.map((skill, index) => {
          return (
            <div key={index} className="flex justify-between ">
              <Tooltip
                content={skill.description}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
                className="max-w-96"
                placement="top"
              >
                <div>{skill.name}</div>
              </Tooltip>
              <div>
                {
                  // get the ability modifier for the skill's associated attribute
                  abilityModifier?.find(
                    (ability) => ability.name === skill.associated_attribute
                  ).value || 8 + // Adds the bonus from the character's background
                    (character.background.skills?.find((charSkill) => {
                      return charSkill.name === skill.name;
                    })?.name
                      ? 1
                      : 0)
                }
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
