#!/bin/sh
CURRENT_PATH=$(pwd)
REPO_URL=${REPO_URL:-https://github.com/efeligne/blank-js-environment.git}
echo "New project name:"

read PROJECT_NAME

if [ -n "$PROJECT_NAME" ]; then
	git clone $REPO_URL $PROJECT_NAME
	cd $PROJECT_NAME
	git remote rm origin
else
	echo -n "Ничего не введено! Завершение работы!"
fi
cd $CURRENT_PATH
exit 0