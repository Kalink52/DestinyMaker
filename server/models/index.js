const Attribute = require("./Attribute");
const Background = require("./Background");
const Class = require("./Class");
const Feature = require("./Feature");
const Item = require("./Item");
const Proficiency = require("./Proficiency");
const Race = require("./Race");
const Skill = require("./Skill");
const Spell = require("./Spell");
const Subrace = require("./Subrace");

const Character = require("./Character");
const Character_Attributes = require("./CharacterAttributes");
const Character_Features = require("./CharacterFeatures");
const Character_Proficiencies = require("./CharacterProficiencies.js");
const Character_Skills = require("./CharacterSkills.js");
const Character_Spells = require("./CharacterSpells.js");

const Background_Skill = require("./BackgroundSkill");

const Race_Features = require("./RaceFeatures");
const Subrace_Features = require("./SubRaceFeatures");

// Create associations between models
Character.belongsTo(Race, { foreignKey: "race_id" });
Character.belongsTo(Subrace, { foreignKey: "subrace_id" });
Character.belongsTo(Class, { foreignKey: "class_id" });
Character.belongsTo(Background, { foreignKey: "background_id" });

Character.belongsToMany(Attribute, {
  through: Character_Attributes,
  foreignKey: "character_id",
  otherKey: "attribute_id",
});
Character.belongsToMany(Skill, {
  through: Character_Skills,
  foreignKey: "character_id",
  otherKey: "skill_id",
});

Background.belongsToMany(Skill, {
  through: Background_Skill,
  foreignKey: "background_id",
  otherKey: "skill_id",
});

Race.belongsToMany(Feature, {
  through: Race_Features,
  foreignKey: "race_id",
  otherKey: "feature_id",
});
Subrace.belongsToMany(Feature, {
  through: Subrace_Features,
  foreignKey: "subrace_id",
  otherKey: "feature_id",
});

module.exports = {
  Attribute,
  Background,
  Class,
  Feature,
  Item,
  Proficiency,
  Race,
  Skill,
  Spell,
  Subrace,
  Character,
  Character_Attributes,
  Character_Features,
  Character_Proficiencies,
  Character_Skills,
  Character_Spells,
  Background_Skill,
  Race_Features,
  Subrace_Features,
};
