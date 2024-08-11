import { getDifferentObject, readFile, getExtension } from './utils.js';
import makeFormat from './formatters/index.js';
import parse from './parse.js';

function genDiff(filepath1, filepath2, format) {
  const dataFile1 = readFile(filepath1);

  const dataFile2 = readFile(filepath2);
  const extension1 = getExtension(filepath1);

  const extension2 = getExtension(filepath2);
  const parseFile1 = parse(dataFile1, extension1);
  const parseFile2 = parse(dataFile2, extension2);
  const dataDiff = getDifferentObject(parseFile1, parseFile2);
  const result = makeFormat(dataDiff, format);
  return result;
}

export default genDiff;
