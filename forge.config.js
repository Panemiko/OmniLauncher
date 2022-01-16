module.exports = {
    packagerConfig: {
        name: 'Omni Launcher',
        executableName: 'omni-launcher'
    },
    plugins: [
        [
            '@electron-forge/plugin-webpack',
            {
                mainConfig: './webpack/webpack.main.config.js',
                renderer: {
                    config: './webpack/webpack.renderer.config.js',
                    entryPoints: [
                        {
                            html: './public/index.html',
                            js: './src/index.tsx',
                            name: 'main_window',
                            preload: {
                                js: './app/preload.ts'
                            }
                        }
                    ]
                }
            }
        ]
    ],
    makers: [
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                name: 'Omni Launcher'
            }
        },
        {
            name: '@electron-forge/maker-zip',
            plataforms: [
                'darwin'
            ]
        },
        {
            name: '@electron-forge/maker-deb',
            config: {}
        },
        {
            name: '@electron-forge/maker-rpm',
            config: {}
        }
    ]
}
