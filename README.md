# keyword-tokenizer

Tokenize json, get all values from json (including nested values).

## Usage
- generate PAT(personal access token) with `read:packages` permission from [github](https://github.com/settings/tokens)

- add `.npmrc` to root directory with given content below and replace `YOUR_PAT_HERE` with the PAT you just generated
```
@atenteccompany:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_PAT_HERE
```

- install package
```bash
npm install @atenteccompany/keyword-tokenizer
```

- example
```typescript
import { TokenizeService } from '@atenteccompany/keyword-tokenizer/dist'

const input = {
    "key": "atentec",
    "key2": 10007
}

const t: TokenizeService = new TokenizeService();
console.log(t.create(input));
/**
 * output: 
 * { strings: [ 'atentec' ], numbers: [10007] }
*/
```

## Tokenizer rules

- get all values from json (including nested values)
- separate numbers and strings
- keep only alphanumeric characters in strings
- convert all strings to lowercase
- split strings with space as a separator
- remove strings have length <= 2
- remove repeated numbers and strings
- ignore null values
