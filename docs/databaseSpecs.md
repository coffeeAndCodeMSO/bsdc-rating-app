# Database Specs

## Resources

- users
- journal entry

### users
  - id - string
  - date created - date
  - date deleted - date
  - first name - string
  - last name - string
  - email - string
  - birthdate (nullable) - date
  - age (nullable) - integer
  - sign (nullable) - string
  - gender (nullable) - string
  - interests (nullable) - string
  - bio (nullable) - string
  - journalEntries - Array

### journal entry
  - id - string
  - date created - date
  - date deleted - date
  - Date/time of dream - date
  - anonymous post? - boolean
  - private? - boolean
  - Description - string
  - Personal notes (nullable) - string
  - tags (nullable) - Array
  - bed time (nullable) - date
  - wake time (nullable) - date

## Example Data

```
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
      anonymous: Boolean,
      private: boolean,
      description: String,
      personalNotes: string,
      tags: [
        String,
        String,
        String
      ],
      bedTime: Date,
      wakeTime: Date
    },
    {
      _id: String,
      dateCreated: Date,
      dateDeleted: Date,
      dreamDate: Date,
      anonymous: Boolean,
      private: boolean,
      description: String,
      personalNotes: string,
      tags: [
        String,
        String,
        String
      ],
      bedTime: Date,
      wakeTime: Date
    }
  ]
}
```
