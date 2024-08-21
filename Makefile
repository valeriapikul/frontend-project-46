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
