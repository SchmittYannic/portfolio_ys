import { PropsWithChildren, ReactElement, createContext, useState } from "react"

export type UseNavHoverStateContextType = {
    lastHoveredNavElement: HTMLElement | null,
    setLastHoveredNavElement: React.Dispatch<React.SetStateAction<HTMLElement | null>>,
}

const initContextState: UseNavHoverStateContextType = {
    lastHoveredNavElement: null,
    setLastHoveredNavElement: () => {},
}

export const NavHoverStateContext = createContext<UseNavHoverStateContextType>(initContextState)

export const NavHoverStateProvider = ({children}: PropsWithChildren): ReactElement => {
    const [lastHoveredNavElement, setLastHoveredNavElement] = useState<HTMLElement | null>(null);

    return (       
        <NavHoverStateContext.Provider 
            value={{
                lastHoveredNavElement,
                setLastHoveredNavElement,
            }} 
        >
            {children}
        </NavHoverStateContext.Provider>       
    )
}