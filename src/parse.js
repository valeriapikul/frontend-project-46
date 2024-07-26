import path from 'path';
import fs from 'fs';

function getData(str) {
  let data = {};
  if (str.startsWith('/')) {
    data = path.resolve(str);
  } else {
    const dirName = process.cwd(str);
    data = path.resolve(dirName, str);
  }
  return JSON.parse(fs.readFileSync(data));
}

export default getData;
