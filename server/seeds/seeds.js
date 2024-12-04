const sequelize = require("../config/connection.js");
const {
  attributes,
  backgrounds,
  classes,
  features,
  items,
  proficiencies,
  races,
  skills,
  spells,
  subraces,
  backgroundSkill,
  raceFeatures,
} = require("./JSON/CharacterAttributes");
const {
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
} = require("../models");
const {
  characters,
  characterAttributes,
  characterEquipment,
  characterFeatures,
  characterProficiencies,
  characterSkills,
  characterSpells,
} = require("./JSON/Characters");
const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("*********** SEEDING Attributes ****************");
    await Attribute.bulkCreate(attributes);
    console.log("*********** SEEDING Background ****************");
    await Background.bulkCreate(backgrounds);
    console.log("*********** SEEDING Class ****************");
    await Class.bulkCreate(classes);
    console.log("*********** SEEDING Feature ****************");
    await Feature.bulkCreate(features);
    console.log("*********** SEEDING Item ****************");
    await Item.bulkCreate(items);
    console.log("*********** SEEDING Proficiency ****************");
    await Proficiency.bulkCreate(proficiencies);
    console.log("*********** SEEDING Race ****************");
    await Race.bulkCreate(races);
    console.log("*********** SEEDING Skill ****************");
    await Skill.bulkCreate(skills);
    console.log("*********** SEEDING Spell ****************");
    await Spell.bulkCreate(spells);
    console.log("*********** SEEDING Subrace ****************");
    await Subrace.bulkCreate(subraces);

    //* "***********CHARACTER SHTUFF STARTING ("***********
    console.log("*********** SEEDING Character ****************");
    await Character.bulkCreate(characters);
    console.log("*********** SEEDING CharacterAttributes ****************");
    await Character_Attributes.bulkCreate(characterAttributes);
    console.log("*********** SEEDING CharacterFeatures ****************");
    await Character_Features.bulkCreate(characterFeatures);
    console.log("*********** SEEDING CharacterProficiencies ****************");
    await Character_Proficiencies.bulkCreate(characterProficiencies);
    console.log("*********** SEEDING CharacterSkills ****************");
    await Character_Skills.bulkCreate(characterSkills);
    console.log("*********** SEEDING CharacterSpells ****************");
    await Character_Spells.bulkCreate(characterSpells);

    console.log("*********** SEEDING BackgroundSkills ****************");
    await Background_Skill.bulkCreate(backgroundSkill);

    console.log("*********** SEEDING RaceAttributes ****************");
    await Race_Features.bulkCreate(raceFeatures);
    console.log("*********** SUCCESS ***********");
    console.log("*********** server seeded ***********");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
seedAll();

const dropAll = async () => {
  await sequelize.drop({ force: true });
  process.exit(0);
};
