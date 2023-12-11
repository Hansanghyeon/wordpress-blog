build:
	yarn build:sage && yarn lerna run build
bootstrap:
	chmod -R 775 bootstrap.sh && sh ./bootstrap.sh