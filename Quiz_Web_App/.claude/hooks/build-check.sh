#!/bin/bash
# PostToolUse hook (Write|Edit|MultiEdit): run a production build after edits to
# JS/CSS/HTML files so syntax/build errors are caught and reported back to Claude.
input=$(cat)
file=$(echo "$input" | jq -r '.tool_input.file_path // .tool_response.filePath // empty')

case "$file" in
  *.js|*.jsx|*.ts|*.tsx|*.css|*.html) ;;
  *) exit 0 ;;
esac

project_dir="/Users/dungnguyen/Quiz-Web-App/Quiz_Web_App"
output=$(cd "$project_dir" && npm run build --silent 2>&1)
status=$?

if [ $status -ne 0 ]; then
  message="Build failed after editing $file. Fix the error(s) below, then continue:

$output"
  reason=$(printf '%s' "$message" | jq -Rs .)
  printf '{"decision":"block","reason":%s}\n' "$reason"
fi

exit 0
