import { Injectable } from '@nestjs/common';
import { Tokens } from './dto/token.dto';

@Injectable()
export class TokenizeService {
  private filterTokens(tokens: string[]): string[] {
    const specialCharsPattern = new RegExp('[^a-zA-Z0-9]', 'g');
    tokens = tokens.map((token) => token.replace(specialCharsPattern, ''));

    return tokens.filter((token) => token.length > 2);
  }

  private getValues(obj: any, result: Tokens) {
    if (obj === null) {
      return;
    }

    if (typeof obj === 'string') {
      result.strings.push(...this.filterTokens(obj.split(' ')));
      return;
    }

    if (typeof obj === 'number') {
      result.numbers.push(obj);
      return;
    }

    if (Array.isArray(obj)) {
      obj.forEach((element) => this.getValues(element, result));
      return;
    }

    // object
    Object.values(obj).forEach((value) => this.getValues(value, result));
  }

  /**
   * @param input object
   * @returns all values of given object (including nested objects),
   * separate numbers and strings,
   * ignore length <= 2 for strings,
   * keep only alphanumeric chars in strings,
   * remove repeated elements
   */
  create(input: any): Tokens {
    const result: Tokens = { strings: [], numbers: [] };
    this.getValues(input, result);

    return {
      strings: [...new Set(result.strings)],
      numbers: [...new Set(result.numbers)],
    };
  }
}