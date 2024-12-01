import { useContext } from "react";
import { CharacterContext } from "../../../utils/context/character";
export default function Skills() {
  const { abilityModifier } = useContext(CharacterContext);
  const skills = [
    { name: "Athletics", value: 0, associatedAbility: "Strength" },
    { name: "Acrobatics", value: 0, associatedAbility: "Dexterity" },
    { name: "Sleight of Hand", value: 0, associatedAbility: "Dexterity" },
    { name: "Stealth", value: 0, associatedAbility: "Dexterity" },
    { name: "Arcana", value: 0, associatedAbility: "Intelligence" },
    { name: "History", value: 0, associatedAbility: "Intelligence" },
    { name: "Investigation", value: 0, associatedAbility: "Intelligence" },
    { name: "Nature", value: 0, associatedAbility: "Intelligence" },
    { name: "Religion", value: 0, associatedAbility: "Intelligence" },
    { name: "Animal Handling", value: 0, associatedAbility: "Wisdom" },
    { name: "Insight", value: 0, associatedAbility: "Wisdom" },
    { name: "Medicine", value: 0, associatedAbility: "Wisdom" },
    { name: "Perception", value: 0, associatedAbility: "Wisdom" },
    { name: "Survival", value: 0, associatedAbility: "Wisdom" },
    { name: "Deception", value: 0, associatedAbility: "Charisma" },
    { name: "Intimidation", value: 0, associatedAbility: "Charisma" },
    { name: "Performance", value: 0, associatedAbility: "Charisma" },
    { name: "Persuasion", value: 0, associatedAbility: "Charisma" },
  ];

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
                        (ability) => ability.name === skill.associatedAbility
                      ).value
                    }
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
                        (ability) => ability.name === skill.associatedAbility
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
