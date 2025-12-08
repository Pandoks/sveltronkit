export {};

declare global {
  interface Window {
    electronAPI: {
      readFile(path: string): Promise<string>;
      testResponse(): Promise<string>;
      sumTwoNumbers(num1: number, num2: number): Promise<number>;
      // add other methods here as you expose them
    };
  }
}
