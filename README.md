# Destiny Maker

A _work in progress_ Baldur's Gate 3 character creator with a sql database. In this project I focused more on the sql database and the ability to make all the necessary componets connect to make the user interface seem reactive.

## About Me

Full stack developer skilled in JavaScript, React, Node.js, and databases, passionate about creating dynamic, user-focused applications.

## Features

- Starts with a default character loaded
- Allows you to name your character
- Background your character background and adds the skills associated with the background to the character sheet
- Race determines your subrace (if applicable ) size, weight, and starting features of your character (right now only Elf, Human, and drow's feature work)
- Subrace at this state only adds the subrace to the character sheet
- Ability scores apply their modifier to the carry capacity, initiative, Hit Points and the appropriate skills.
- Level at this state only increases Hit Points

## Roadmap

- Add an indicator to the skills the background added points to
- Add subrace feats and interaction with the character sheet
- make the ability score "points left" not allow a value less than 0
- make more seed connections for the database.
- local storage, and allow saving to the server.
- make the interface prettier.

- Add more integrations

## Run Locally

Make sure you have NodeJS installed and PostgreSQL installed

Clone the project

```bash
  git clone git@github.com:Kalink52/DestinyMaker.git
```

Go to the project directory

```bash
  cd DestinyMaker 
```

Install dependencies

```bash
  npm install
```

Seed the server

```bash
  npm run seed
```

Start the server

```bash
  npm run dev
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
