# Database Specs

## Data

- users
- journal entry


## users
- id - string
- date created - date
- date deleted - date
- first name - string
- last name - string
- email - string
- birthdate (nullable) - date
- age (nullable) - int
- sign (nullable) - string
- gender (nullable) - string
- interest (nullable) - string
- bio (nullable) - string


## journal entry

- id - string
- date created - date
- date deleted - date
- Date/time - date
- anonymous - boolean
- private/public - boolean
- Description - string
- Personal notes (nullable) - string
- tags (optional) - string
- bed time (optional) - date
- wake time (optional) - date


## Example Data

{
  _id: String,
  dateCreated: Date,
  dateDeleted: Date,
  firstName: String,
  lastName: String,
  email: String,
  birthDate: Date,
  age: Int,
  sign: String,
  gender: String,
  Interests: String,
  Bio: String,
  journalEntries: [
  {
    _id: String,
    dateCreated: Date,
    dateDeleted: Date,
    dreamDate: Date,
    anonymous: boolean,
    private: boolean,
    Description: String,
    personalNotes: String,
    tags: [
    string,
    string,
    string
    ],
    bedTime: Date,
    wakeTime: Date

  }
  ]
}
