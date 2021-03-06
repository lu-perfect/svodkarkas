// lint-staged.config.js
module.exports = {
    '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

    // Lint then format TypeScript and JavaScript files
    '**/*.(ts|tsx|js)': (filenames) => [
        `yarn eslint --fix ${filenames.join(' ')}`,
        `yarn prettier --write ${filenames.join(' ')}`,
    ],

    // Format MarkDown and JSON
    '**/*.(md|json)': (filenames) =>
        `yarn prettier --write ${filenames.join(' ')}`,
}
