build: node_modules
	python3 parse.py && node node_modules/webpack/bin/webpack.js

node_modules:
	npm install
