#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 文档源码提交到github
git add -A
git commit -m '更新笔记'
git pull --rebase origin main
git push -u origin maih