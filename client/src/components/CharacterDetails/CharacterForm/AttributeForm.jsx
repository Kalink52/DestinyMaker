import { useContext, useState, useEffect } from "react";
import { CharacterContext } from "../../../utils/context/character";
const STARTINGPOINTS = 27;

export default function AttributeForm() {
  const { character, dispatch } = useContext(CharacterContext);
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
    return STARTINGPOINTS - pointsUsed;
  };

  const [isPointsLeft, setPointsLeft] = useState(true);
  useEffect(() => {
    setPointsLeft(PointsLeft() <= 0);
  }, [isPointsLeft]);

  const handleChange = (e, index, attribute) => {
    dispatch({
      type: "UPDATE_ATTRIBUTES",
      index: index,
      payload: { ...attribute, value: parseInt(e.target.value) },
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
              onChange={(e) => handleChange(e, index, attribute)}
            />
          </div>
        );
      })}
      <div> Points left : {PointsLeft()}</div>
    </>
  );
}
