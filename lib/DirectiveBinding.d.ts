export default interface DirectiveHookBinding {
    name: string;
    value: boolean;
    expression: string;
    arg: string;
    modifiers: {
        [key: string]: boolean;
    };
}
