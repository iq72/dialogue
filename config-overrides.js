const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color':'#09c6da',
            '@control-padding-horizontal':'@padding-sm',
            '@control-padding-horizontal-sm':'@padding-sm'
        }
    })
);