declare module RegexpView {
  class Parser {
    constructor(container: HTMLElement, options: any)
    get warnings(): any[]
    get container(): HTMLElement
    set container(container: HTMLElement)
    parse(expression: RegExp): Promise<void>
    render(): Promise<void>
    cancel()
  }

  export default Parser
}