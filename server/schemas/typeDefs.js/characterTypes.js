module.exports = `
type Character {
    id: ID
    name: String
    race: Race
    subrace: Subrace
    class:Class
    background:Background
    health: Int
    speed: Int
    level: Int
    darkvision: Int

    attributes: [AttributeValue]
    }
type Attribute {
    id: ID!
    name: String!
    description: String
    }
type AttributeValue  {
    attribute: Attribute!
    value: Int
}
type Race {
    id: ID!
    name: String
    description: String
    base_speed: Int
    base_darkvision: Int
    }

type Subrace {
    id: ID!
    race_id: Int
    name: String
    description: String
    additional_speed: Int
    additional_dark_vision: Int
    }

type Class{
    id: ID
    name: String
    description: String
    base_health: Int
    health_per_level: Int
    spellcasting_ability: String
    proficiencies: String
    }

type Background{
    id: ID!
    name: String
    description:String
    skill_proficiencies: String
    }

type Ability{
    id: ID!
    name: String
    description: String
    }

type CharacterAbility{
    id: ID!
    ability_id: Int
    ability: Ability
    value: Int
    }

type Traits{
    race: [Race], 
    subrace: [Subrace], 
    class: [Class], 
    background: [Background], 
    abilities: [Ability] 
}
    `;
