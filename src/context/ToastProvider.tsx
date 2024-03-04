import { useState, createContext, ReactElement } from "react";

export type ToastType = {
    id: number,
    type: string,
    text: string,
}

export type UseToastContextType = {
    toastList: ToastType[],
    setToastList: React.Dispatch<React.SetStateAction<ToastType[]>>,
    addToast: Function,
}

const initContextState: UseToastContextType = {
    toastList: [],
    setToastList: () => {},
    addToast: () => {},
}

export const ToastContext = createContext<UseToastContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[]}

export const ToastProvider = ({children}: ChildrenType): ReactElement => {
    const [toastList, setToastList] = useState<ToastType[]>([]);

    const addToast = (type: string, text: string) => {
        let id;

        if (toastList.length === 0) {
            id = 1;
        } else {
            id = toastList[toastList.length - 1].id + 1;
        }

        const newListItem = {
            id: id,
            type: type,
            text: text,
        };

        setToastList([...toastList, newListItem]);
    }

    return (
        <ToastContext.Provider value={{toastList, setToastList, addToast}}>
            {children}
        </ToastContext.Provider>
    )
}