module.exports = JSON.parse(
    require('fs').readFileSync(
        require('path').join(
            __dirname,
            '.eslintrc'
        )
    )
);
