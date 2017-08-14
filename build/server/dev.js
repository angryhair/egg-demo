const VueWebpack = require('easywebpack-vue');
const WebpackBaseBuilder = require('../base');
class ServerDevBuilder extends WebpackBaseBuilder(VueWebpack.WebpackServerBuilder) {
    constructor(config) {
        super(config);
        this.setDevMode();
        this.setPrefix('');
        this.setBuildPath('app/view');
    }
}

module.exports = new ServerDevBuilder().create();
