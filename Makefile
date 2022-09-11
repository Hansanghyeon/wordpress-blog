test:
	git push origin release/$v
release:
	git commit -m ":memo: $v changelog"
	git checkout main
	git merge --no-ff release/$v -m ":bookmark: $v"
	git tag -a $v -m "Release $v"
	git checkout develop
	git merge --no-ff release/$v -m ":bookmark: $v"
	git push origin develop
	git push origin main
	git push origin $v
	git branch -d release/$v
p:
	sudo chown -R 33:33 apps/theme .docker/wp && sudo chmod -R 775 apps/theme .docker/wp
