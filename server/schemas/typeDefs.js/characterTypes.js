module.exports = `
type Character {
    id: ID
    user_id: Int
    name: String
    gender: String
    race: Race
    subrace: Subrace
    class:Class
    background:Background
    abilities: [CharacterAbility]
    }

type Race {
    id: ID!
    name: String
    }

type Subrace {
    id: ID!
    race_id: Int
    name: String
    }

type Class{
    id: ID
    name: String
    base_hit_points: Int
    scaling_hit_points: Int
    }

type Background{
    id: ID!
    name: String
    description:String
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
