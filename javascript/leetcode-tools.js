#!/usr/local/bin/node

const str = process.argv[2];

if (!str) {
  process.exit(1);
}

console.log(
  str
    .replace('.', '')
    .split(' ')
    .join('-')
    .toLowerCase()
);
