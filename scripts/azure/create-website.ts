/** 
 * Create azure website
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

log.info(`Creating Azure Website`);

log.debug(`Getting certificate credentials`);
const credentials = config.azure.getCertificateCredentials();

log.debug(`Creating website management client`);
const client = webSiteManagement.createWebSiteManagementClient(credentials);

client.webSites.create(
    config.azure.webSite.webSpaceName,
    config.azure.webSite,
    (err, result) => {
        if (err) {
            throw err;
        } else {
            log.info(result);
        }
    });
