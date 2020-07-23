#!/bin/sh
REPO_URL=${REPO_URL:-https://github.com/efeligne/blank-js-environment.git}
echo "Enter new project name:"

read PROJECT_NAME

if [ -n "$PROJECT_NAME" ]; then
	git clone $REPO_URL $PROJECT_NAME
	cd $PROJECT_NAME
	mkdir __tests__
	rm -rf .git
	rm -rf tools
	git init 
	git add .
	git commit -am "Init project."
else
	echo -n "Nothing entered! Script will be stopped!"
fi
exit 0