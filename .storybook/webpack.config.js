const path = require('path');

module.exports = async ({ config, mode }) => {
    config.module.rules.push(
        {
            test: /\.stories\.ts?$/,
            loaders: [
                {
                    loader: require.resolve('@storybook/source-loader'),
                    options: { parser: 'typescript' }
                }
            ],
            enforce: 'pre'
        },
        {
            test: /\.scss$/,
            use: ['sass-loader'],
            include: path.resolve(__dirname, '../')
        }
    );

    const lib_path = path.join(__dirname, '../projects/survey-component-lib/src/lib');
    config.resolve.alias['survey-component-lib'] = lib_path;
    return config;
};
