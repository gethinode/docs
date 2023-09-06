const { env } = require('node:process');

module.exports = {
    onPreBuild({ run, utils }) {
        let version = env.DART_SASS_VERSION || "1.66.1";

        let newCommand = `
            curl -LJO https://github.com/sass/dart-sass/releases/download/${version}/dart-sass-${version}-linux-x64.tar.gz && \
            tar -xf dart-sass-${version}-linux-x64.tar.gz && \
            rm dart-sass-${version}-linux-x64.tar.gz && \
            export PATH=/opt/build/repo/dart-sass:$PATH`
        
        utils.status.show({
            title: "Installing Dart Sass",
            summary: `Version ${version}`,
        });
    
        // install the Dart Sass binary
        try {
            run.command(newCommand)
        } catch (error) {
            utils.build.failBuild("Cannot install Dart Sass");
        }
    },
};