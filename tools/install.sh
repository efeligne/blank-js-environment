#!/bin/sh
CURRENT_PATH=$(pwd)
REPO_URL=${REPO_URL:-https://github.com/efeligne/blank-js-environment.git}
echo "Enter new project name:"

read PROJECT_NAME

if [ -n "$PROJECT_NAME" ]; then
	git clone $REPO_URL $PROJECT_NAME
	cd $PROJECT_NAME
	mkdir __tests__
	rm -rf .git
	git init 
	git add .
	git commit -am "Init project."
else
	echo -n "Ничего не введено! Завершение работы!"
	cd $CURRENT_PATH
fi
exit 0