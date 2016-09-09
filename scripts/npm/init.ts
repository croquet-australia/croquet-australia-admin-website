// initialize machine for development, ci & deployment tasks.

import { Log } from '../lib/log';
import { Shell } from '../lib/shell';

const log = new Log();
const shell = new Shell(log);

uninstallGlobalNpmPackage('typescript');
uninstallGlobalNpmPackage('angular-cli');
cleanNpmCache();
installGlobalNpmPackage('typescript@2.0.0');    // angular-cli 1.0.0-beta.11-webpack.8 does not work with typescript 2.0.2.
installGlobalNpmPackage('angular-cli@webpack');

function uninstallGlobalNpmPackage(packageName: string): void {
    shell.exec(
        `npm uninstall --global ${packageName}`,
        `Uninstalling global npm package '${log.highlight(packageName)}'...`,
        `Successfully uninstalled '${log.highlight(packageName)}'.`,
        `Cannot uninstall '${log.highlight(packageName)}.`);
    log.info('');
}

function cleanNpmCache(): void {
    shell.exec(
        `npm cache clean`,
        `Cleaning npm cache...`,
        `Successfully cleaned npm cache.`,
        `Cannot clean npm cache.`);
    log.info('');
}

function installGlobalNpmPackage(packageName: string): void {
    shell.exec(
        `npm install --global ${packageName}`,
        `Installing global npm package '${log.highlight(packageName)}' --no-optional...`,
        `Successfully installed '${log.highlight(packageName)}'.`,
        `Cannot install '${log.highlight(packageName)}.`);
    log.info('');
}
