# keyword-tokenizer

Tokenize json, get all values from json (including nested values).

## Usage
- add `.npmrc` to root directory with this content
```
@atenteccompany:registry=https://npm.pkg.github.com
```

- install package
```bash
npm install @atenteccompany/keyword-tokenizer@1.0.0`
```

- example
```typescript
import { TokenizeService } from '@atenteccompany/keyword-tokenizer/dist'

const input = {
    "key": "atentec",
    "key2": 1007
}

const t: TokenizeService = new TokenizeService();
console.log(t.create(input));
/**
 * output: 
 * { strings: [ 'atentec' ], numbers: [1007] }
*/
```

## Tokenizer rules

- get all values from json (including nested values)
- separate numbers and strings
- keep only alphanumeric characters in strings
- split strings with space as a separator
- remove strings have length <= 2
- remove repeated numbers and strings
- ignore null values
