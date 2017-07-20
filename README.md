# Alexa Slot-Value-Converter

Converts a comma separated list to a JSON object that can be used in the *Alexa Skill Builder Beta* to bulk insert custom slot values. Also removes duplicates.

**Example Input:**

```
David,Thomas,Chris,Thomas,Steve
```

**Example Output:**

```json
{
  "name": "FIRSTNAMES",
  "values": [
    {
      "id": "",
      "name": {
        "value": "david",
        "synonyms": []
      }
    },
    {
      "id": "",
      "name": {
        "value": "thomas",
        "synonyms": []
      }
    },
    {
      "id": "",
      "name": {
        "value": "chris",
        "synonyms": []
      }
    },
    {
      "id": "",
      "name": {
        "value": "steve",
        "synonyms": []
      }
    }
  ]
}
```



## Usage

1. Create a file in the **input** directory containing a comma separated list of strings.
2. Run **node convert**.
3. Find the converted JSON object in the **output** directory.
4. Use it in the **Alexa Skill Builder Beta** in the **Code Editor**.