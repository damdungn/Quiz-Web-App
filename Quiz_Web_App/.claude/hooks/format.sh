#!/bin/bash
# PostToolUse hook (Write|Edit|MultiEdit): auto-format the edited file with Prettier.
input=$(cat)
file=$(echo "$input" | jq -r '.tool_input.file_path // .tool_response.filePath // empty')
[ -z "$file" ] && exit 0

case "$file" in
  *.js|*.jsx|*.ts|*.tsx|*.css|*.html|*.json)
    npx --no-install prettier --write "$file" >/dev/null 2>&1
    ;;
esac

exit 0
