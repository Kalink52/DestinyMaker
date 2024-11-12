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
    strength: Int
    dexterity: Int
    constitution: Int
    intelligence: Int
    wisdom: Int
    charisma: Int
    attributes: [Attribute]
    skills: [Skill]
    }
type Attribute {
    id: ID!
    name: String!
    description: String
    }
type Skill {
    id: ID!
    name: String!
    description: String
    associated_attribute: String
    }

type Race {
    id: ID!
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
