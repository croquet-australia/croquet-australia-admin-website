/// <reference path='../../../typings/index.d.ts' />

import * as yargs from 'yargs';

export interface ICommandLineArgs {
    slot: string;
    build: string;
}

export function getCommandLineArgs(): ICommandLineArgs {
    const argv: any = yargs
        .usage('Usage: $0 --slot [string] --build [number]')
        .option('slot', { describe: 'Choose deployment slot', choices: ['prod', 'production', 'test', 'dev'], demand: true })
        .option('build', { describe: 'AppVeyor build number to deploy', demand: true, type: 'number' })
        .check((argv, aliases) => checkBuildIsNumber(argv['build']))
        .argv;

    const args: ICommandLineArgs = argv;

    args.slot = args.slot == 'prod' ? 'production' : args.slot;

    return args;
}

function checkBuildIsNumber(build: any) {
    if (isNaN(build)) {
        throw new Error('--build must be a number');
    }
    return true;
}
