/// <reference path='../../typings/index.d.ts' />

import * as shell from 'shelljs';
import { Log } from './log';

export class Shell {
    private log: Log;

    constructor(log?: Log) {
        this.log = log || new Log();
    }

    /**
     * Executes the given command synchronously.
     * @param   {string}    command             The command to execute.
     * @param   {string}    startingMessage     Writes this message to this.log.info(...) before running the command.  
     * @param   {string}    successfulMessage   Writes this message to this.log.info(...) after the command completes successfully.  
     * @param   {string}    failureMessage      Throws this message if command fails.  
     */
    public exec(command: string, startingMessage?: string, successfulMessage?: string, failureMessage?: string): void {
        if (startingMessage) {
            this.log.info(startingMessage);
        }

        const result = this.tryExec(command);

        if (result.code == 0) {
            if (successfulMessage) {
                this.log.info(successfulMessage)
            }
            return;
        }

        if (failureMessage) {
            throw new Error(failureMessage);
        }

        throw new Error(`Command failed with return code ${result.code}`);
    }

    /**
     * Executes the given command synchronously.
     * @return  {ExecOutputReturnValue}     Returns an object containing the return code and output as string.
     */
    public tryExec(cmd: string): shell.ExecOutputReturnValue {
        return shell.exec(cmd);
    }
}
