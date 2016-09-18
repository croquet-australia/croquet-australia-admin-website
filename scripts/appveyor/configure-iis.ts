/** 
 * Configure IIS on AppVeyor CI server
 */

import { config } from '../../config';
import { Log } from '../lib/log';
import { Shell } from '../lib/shell';
import * as http from 'http';
import * as path from 'path';
import * as fs from 'fs';

const log = new Log();
const shell = new Shell(log);

log.info(`Configuring IIS`);

const appcmd = `${process.env.systemroot}\\system32\\inetsrv\\appcmd`;
const dist = path.normalize(`${__dirname}/../../dist`);
const index = path.normalize(`${dist}/index.html`);
const name = config.azure.webSite.name;

if (!fs.existsSync(dist)) {
    throw new Error(`Cannot find dist folder '${dist}'.`)
}

if (!fs.existsSync(index)) {
    throw new Error(`Cannot find index file '${index}'.`)
}

shell.exec(
    `${appcmd} add site /name:${name} /bindings:http/*:4200:localhost /physicalPath:${dist}`,
    `Adding website to IIS`,
    `Successfully added website to IIS`,
    `Cannot add website to IIS`);

shell.exec(
    `icacls "${dist}" /t /grant Everyone:(GR,GE,GW)`,
    `Setting permissions to website folder '${dist}'`,
    `Successfully set permissions to website folder '${dist}'`,
    `Cannot set permissions to website folder '${dist}'`);

checkWebsiteIsRunning();

log.info(`Successfully configured IIS`);

function checkWebsiteIsRunning() {

    //The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
    const options: http.RequestOptions = {
        host: 'localhost',
        port: 4200,
        path: '/'
    };

    const callback = function (response: http.IncomingMessage) {
        let content = '';

        //another chunk of data has been recieved, so append it to `str`
        response.on('data', function (chunk) {
            content += chunk;
        });

        //the whole response has been recieved, so we just print it out here
        response.on('end', function () {
            if (content.indexOf('<title>Croquet Australia Admin Website</title>') < 0) {
                console.log('Website content does not include expected title');
                console.log(content);
                throw new Error('Website is not running');
            }
            console.log('Website is running');
        });
    }

    http.request(options, callback).end();
}