build: node_modules
	npm run build

node_modules:
	npm install

generate:
	python3 parse.py

up: generate build
	git add albums.*
	git status
