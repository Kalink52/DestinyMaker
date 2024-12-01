import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      id
      name
      health
      speed
      level
      darkvision
      race {
        id
        description
        base_speed
        base_darkvision
        name
      }
      subrace {
        id
        race_id
        name
        description
        additional_speed
        additional_dark_vision
      }
      class {
        id
        name
        description
        base_health
        health_per_level
        spellcasting_ability
        proficiencies
      }
      background {
        id
        name
        description
        skill_proficiencies
      }
      attributes {
        attribute {
          id
          name
          description
        }
        value
      }
    }
  }
`;
