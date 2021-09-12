release:
	git checkout main
	git merge --no-ff release/$v -m ":bookmark: $v"
	git tag -a $v -m "Release $v"
	git checkout develop
	git merge --no-ff release/$v -m ":bookmark: $v"