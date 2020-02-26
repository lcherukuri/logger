import { loggerInterface } from "./LoggerInterface";

export class ArrayLogger implements loggerInterface {
    private _messages: string[];

    public constructor() {
        this._messages = [];
    }

    private log(message: string, logLevel: string): void {
        this._messages.push(`${logLevel}: ${message}`);
    }
    
    public error(message: string): void {
        this.log(message, 'ERROR');
    }
    
    public info(message: string): void {
        this.log(message, 'INFO');
    }
}
