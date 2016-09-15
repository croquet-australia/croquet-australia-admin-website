import * as chalk  from 'chalk';

export class Log {
    public debug(message: string): void {
        this.writeLine(chalk.gray(message));
    }

    public error(message: string): void {
        this.writeLine(chalk.red(message));
    }
    
    public info(message: string): void {
        this.writeLine(message);
    }

    public highlight(message: any): string {
        return chalk.yellow(message);
    }

    public warn(message: string): void {
        this.writeLine(chalk.yellow(message));
    }

    private writeLine(message: string): void {
        console.log(message);
    }
}
