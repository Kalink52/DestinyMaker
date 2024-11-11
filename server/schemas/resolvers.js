const {
  Character,
  //   Background,
  //   Race,
  //   Subrace,
  //   Class,
  //   Ability,
  //   CharacterAbility,
} = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

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
  },
};

module.exports = resolvers;
