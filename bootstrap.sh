#!/bin/bash
# Author: 2023-12-05 Hansanghyeon

# Install packages
echo '======================================'
echo 'monorepo project install 시작'
echo '======================================'
yarn install

echo '======================================'
echo 'theme dependence install 시작'
echo '======================================'
# 테마로이동
# theme 폴더에서 yarn install
cd theme
yarn install
cd ..

echo '======================================'
echo 'tailwindcss config link 시작'
echo '======================================'
cd packages/tailwindcss
yarn link
cd ../../theme
yarn link "@workspaces/project-tailwindcss-config"