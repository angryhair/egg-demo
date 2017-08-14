const VueWebpack = require('easywebpack-vue');
const WebpackBaseBuilder = require('../base');
class ServerProdBuilder extends WebpackBaseBuilder(VueWebpack.WebpackServerBuilder) {
    constructor(config) {
        super(config);
        this.setPrefix('');
        this.setBuildPath('app/view');
        this.addDefinePlugin({ PROD: true });
    }
}

module.exports = new ServerProdBuilder().create();