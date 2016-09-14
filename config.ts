/**
 * Global configuration information for code and scripts in this repository.
 * 
 * Azure Management Certificate
 * ============================
 * config.azure.getCertificateCredentials() depends on the Azure management certificate being
 * installed on this machine. 
 * 
 * How to install Azure Management Certificate
 * -------------------------------------------
 * - Install Azure CLI
 * 
 *      cmd> npm install --global azure-cli
 * 
 * - Download Azure publishsettings file from http://go.microsoft.com/fwlink/?LinkId=254432
 * 
 * - Import Azure publishsettings file
 * 
 *      cmd> azure account import [file name].publishsettings
 * 
 * - Export Azure Management Certificate
 * 
 *      cmd> azure account cert export --subscription [azure subscription id] --file %USERPROFILE%\.secrets\azure\[azure subscription id].pem
 * 
 * Note: the above commands are run with Windows cmd.exe. The same commands, with minor modifications should
 * run on Mac or Linux.
 * 
 * todo: replace azure account commands with a script. 
 */

const fs = require('fs');
const os = require('os');
const webSiteManagement = require('azure-mgmt-website');

class Config {
    azure = {
        pem: `${os.homedir()}\\.secrets\\azure\\32e22437-24a9-4824-9144-c3057f8bd439.pem`,
        subscriptionId: `32e22437-24a9-4824-9144-c3057f8bd439`,
        getCertificateCredentials: getAzureCertificateCredentials,
        webSite: {
            name: `croquet-australia-admin`,
            serverFarm: `tim-murphy-west-us`,
            webSpaceName: `West-US-WestUSwebspace`
        }
    };
}

function getAzureCertificateCredentials(): any {
    if (!fs.existsSync(this.pem)) {
        throw new Error(`Cannot find Azure management certificate '${this.pem}'.`)
    }

    const pemContents = fs.readFileSync(this.pem);
    const credentials = webSiteManagement.createCertificateCloudCredentials({
        subscriptionId: this.subscriptionId,
        pem: pemContents
    });

    return credentials;
}

export const config: Config = new Config();
