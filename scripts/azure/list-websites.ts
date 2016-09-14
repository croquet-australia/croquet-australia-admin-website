/** 
 * List azure websites
 * 
 * References:
 * 
 *  - http://azure.github.io/azure-sdk-for-node/index.html
 *  - http://azure.github.io/azure-sdk-for-node/azure-asm-website/latest/
 */

import { config } from '../../config';
import { Log } from '../lib/log';
import { Shell } from '../lib/shell';

const webSiteManagement = require('azure-mgmt-website');

const log = new Log();
const shell = new Shell(log);

log.info(`Azure Websites`);

log.debug(`Getting certificate credentials`);
const credentials = config.azure.getCertificateCredentials();

log.debug(`Creating website management client`);
const client = webSiteManagement.createWebSiteManagementClient(credentials);

log.debug(`Getting list of webspaces...`);
client.webSpaces.list(function (err, result) {
    if (err) {
        throw err;
    } else {
        const webSpaces = result.webSpaces;

        webSpaces.forEach(webSpace => {
            log.info(`  ${webSpace.name}`)
            client.webSpaces.listWebSites(webSpace.name, function (err, result) {
                if (err) {
                    throw err;
                } else {
                    const webSites = result.webSites.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);

                    webSites.forEach(webSite => {
                        log.info(`    - ${webSite.name}`);
                    });

                    // console.log(webSites);
                }
            });
        });

        // console.log(result);
    }
});
