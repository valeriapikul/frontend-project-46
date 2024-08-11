install: 
	npm ci

publish:
	npm publish --dry-run


gendiff:
	node bin/gendiff.js

lint:
	npx eslint .

fix:
	npx eslint --fix .

test:
	npm run test
	
test-coverage:
	npm test -- --coverage --coverageProvider=v8


	gendiff __fixtures__/file1.json __fixtures__/file2.json -f json
	gendiff __fixtures__/file1.json __fixtures__/file2.json -f plain
	npm run test
	gendiff __fixtures__/file1.json __fixtures__/file2.json 
	gendiff __fixtures__/file1.json __fixtures__/file2.json -f stylish