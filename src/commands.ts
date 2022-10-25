import * as changeCase from 'change-case';
import { lowerCase } from 'lower-case';
import { upperCase } from 'upper-case';

export const COMMANDS = [
  {
    type: 'camel',
    command: 'extension.case-helper.camel',
    fn: (text: string) => changeCase.camelCase(text),
  },
  {
    type: 'constant',
    command: 'extension.case-helper.constant',
    fn: (text: string) => changeCase.constantCase(text),
  },
  {
    type: 'dot',
    command: 'extension.case-helper.dot',
    fn: (text: string) => changeCase.dotCase(text),
  },
  {
    type: 'kebab',
    command: 'extension.case-helper.kebab',
    fn: (text: string) => changeCase.paramCase(text),
  },
  {
    type: 'lower',
    command: 'extension.case-helper.lower',
    fn: (text: string) => lowerCase(text),
  },
  {
    type: 'no',
    command: 'extension.case-helper.no',
    fn: (text: string) => changeCase.noCase(text),
  },
  {
    type: 'pascal',
    command: 'extension.case-helper.pascal',
    fn: (text: string) => changeCase.pascalCase(text),
  },
  {
    type: 'path',
    command: 'extension.case-helper.path',
    fn: (text: string) => changeCase.pathCase(text),
  },
  {
    type: 'snake',
    command: 'extension.case-helper.snake',
    fn: (text: string) => changeCase.snakeCase(text),
  },
  {
    type: 'upper',
    command: 'extension.case-helper.upper',
    fn: (text: string) => upperCase(text),
  },
];
