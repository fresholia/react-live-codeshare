interface codeCallbackProps {
   [name: string]: Function;
}

interface codeActionsProps {
   onClick?: codeCallbackProps;
   
}

export type { codeActionsProps }