import { loggerInterface } from "./LoggerInterface";

export class ConsoleLogger implements loggerInterface {
    public error(message: string): void {
        console.error(message);
    }
    
    public info(message: string): void {
        console.info(message);
    }
}
