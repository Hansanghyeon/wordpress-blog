build:
	yarn lerna run build && yarn build:sage
bootstrap:
	cd packages/tailwindcss && yarn link && cd ../../theme && yarn link "@workspaces/project-tailwindcss-config"