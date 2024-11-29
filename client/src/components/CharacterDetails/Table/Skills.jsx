const skillArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];
export default function Skills() {
  return (
    <>
      <div>Skills</div>
      <div className="grid grid-cols-2 divide-x-4 ">
        <div className="px-2 ">
          {skillArray.map((skill) => {
            if (skill < 10) {
              return (
                <div key={skill} className="flex justify-between ">
                  <div>Skill {skill}</div>
                  <div>10</div>
                </div>
              );
            }
          })}
        </div>
        <div className="px-2">
          {skillArray.map((skill) => {
            if (skill >= 10) {
              return (
                <div key={skill} className="flex justify-between ">
                  <div>Skill {skill}</div>
                  <div>10</div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
