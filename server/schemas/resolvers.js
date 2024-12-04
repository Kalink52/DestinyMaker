const {
  Character,
  Attribute,
  Background,
  Class,
  Race,
  Skill,
  Subrace,
  Feature,
  //   CharacterAbility,
} = require("../models");
// const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    characters: async () => {
      const charData = await Character.findAll({
        include: {
          all: true,
          nested: true,
        },
      });
      return charData;
    },
    GetAllTraits: async () => {
      const attributeData = Attribute.findAll();
      const backgroundData = Background.findAll({
        include: {
          all: true,
          nested: true,
        },
      });
      const classData = Class.findAll();
      const racedata = Race.findAll({
        include: {
          all: true,
          nested: true,
        },
      });
      const skillData = Skill.findAll();
      const subraces = Subrace.findAll();
      return {
        attribute: attributeData,
        background: backgroundData,
        class: classData,
        race: racedata,
        skill: skillData,
        subrace: subraces,
      };
    },
  },
  Character: {
    attributes: async (character) => {
      const attributes = await character.getAttributes();
      return attributes.map((attribute) => {
        return {
          attribute,
          value: attribute.character_attributes.value,
        };
      });
    },
  },
};

module.exports = resolvers;
