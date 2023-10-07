#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# Windows系统下在提交代码时自动将LF转换为CRLF
git config --global core.autocrlf true

# 文档源码提交到github
git add -A
git commit -m 'add notes'
git pull --rebase origin master
git push -u origin master

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'



git config --local user.name "angelingRemon"
git config --local user.email "790223383@qq.com"

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果发布到 https://<USERNAME>.github.io/<REPO>
 git push -f git@github.com:angelingRemon/knowledgeNotesPage.git master:gh-pages

# 如果使用 travis 持续集成
#git push -f https://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@github.com/AngelingRemon/knowledgeNotes.git main:gh-pages

cd -
