build: node_modules
	node node_modules/webpack/bin/webpack.js --config prod.config.js

node_modules:
	npm install

generate:
	python3 parse.py


up: generate build
	git add public/* albums.*
	git status