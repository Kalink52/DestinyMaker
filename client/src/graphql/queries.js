import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      id
      name
      race {
        id
        name
        description
        base_speed
        base_darkvision
        features {
          id
          name
          description
          default_value
        }
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
        skills {
          id
          name
          description
          associated_attribute
        }
      }
      health
      speed
      level
      darkvision
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
export const GET_TRAITS = gql`
  query Query {
    GetAllTraits {
      race {
        id
        name
        description
        base_speed
        base_darkvision
      }
      attribute {
        id
        name
        description
      }
      background {
        id
        name
        description
        skills {
          id
          name
          description
          associated_attribute
        }
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
      subrace {
        id
        race_id
        name
        description
        additional_speed
        additional_dark_vision
      }
      skill {
        id
        name
        description
        associated_attribute
      }
    }
  }
`;
