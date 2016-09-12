/** 
 * List azure websites
 * 
 * References:
 * 
 *  - http://azure.github.io/azure-sdk-for-node/index.html
 *  - http://azure.github.io/azure-sdk-for-node/azure-asm-website/latest/
 */

/// <reference path='../../typings/index.d.ts' />

import { config } from '../../config';
import { Log } from '../lib/log';
import { Shell } from '../lib/shell';

const webSiteManagement = require('azure-mgmt-website');

const log = new Log();
const shell = new Shell(log);

log.info(`Azure Website - ${config.azure.webSite.name}`);

const credentials = config.azure.getCertificateCredentials();
const client = webSiteManagement.createWebSiteManagementClient(credentials);

client.webSites.get(
    config.azure.webSite.webSpaceName,
    config.azure.webSite.name,
    (err, result) => {
    if (err) {
        throw err;
    } else {
        console.log(result);
    }
});
