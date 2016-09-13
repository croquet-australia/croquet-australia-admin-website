/** 
 * Deploy AppVeyor artifacts to Azure website slot
 */

/// <reference path='../../../typings/index.d.ts' />

'use strict';

import { config } from '../../../config';
import { Log } from '../../lib/log';
import { Shell } from '../../lib/shell';
import { getCommandLineArgs } from './commandLineArgs';

const args = getCommandLineArgs();
const log = new Log();
const shell = new Shell(log);

log.debug(`slot: ${args.slot}, build: ${args.build}`);

