import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  readFile: (path: string) => ipcRenderer.invoke('read-file', path),
  writeFile: (path: string, contents: string) => ipcRenderer.invoke('write-file', { path, contents }),
  testResponse: (path: string) => ipcRenderer.invoke('test-response', path),
  sumTwoNumbers: (num1: number, num2: number) => ipcRenderer.invoke('sum-two-numbers', {num1, num2})
})
