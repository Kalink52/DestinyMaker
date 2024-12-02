import { useContext, useState, useEffect } from "react";
import { CharacterContext } from "../../../utils/context/character";
import { TraitContext } from "../../../utils/context/trait";
const Startingpoints = 27;

export default function AttributeForm() {
  const { character, setCharacter } = useContext(CharacterContext);
  const { traits } = useContext(TraitContext);
  // const { attribute: attributes } = traits;
  // console.log(attributes);

  const PointsLeft = () => {
    let pointsUsed = character.attributes.reduce((total, attr) => {
      if (attr.value > 14) {
        return total + (attr.value - 8) + 2;
      }
      if (attr.value > 13) {
        return total + (attr.value - 8) + 1;
      }
      return total + (attr.value - 8);
    }, 0);
    return Startingpoints - pointsUsed;
  };

  const [isPointsLeft, setPointsLeft] = useState(true);
  useEffect(() => {
    setPointsLeft(PointsLeft() <= 0);
  }, [isPointsLeft]);

  const handleChange = (e, attribute) => {
    setCharacter({
      ...character,
      attributes: character.attributes.map((attr) =>
        attr.attribute.name === attribute.attribute.name
          ? { ...attr, value: e.target.value }
          : attr
      ),
    });
  };

  return (
    <>
      {character.attributes.map((attribute, index) => {
        return (
          <div key={index}>
            <label>{attribute.attribute.name}:</label>
            <input
              type="number"
              name={attribute.attribute.name}
              value={attribute.value}
              min={8}
              max={15}
              onChange={(e) => handleChange(e, attribute)}
            />
          </div>
        );
      })}
      <div> Points left : {PointsLeft()}</div>
    </>
  );
}
