import { useState, useEffect, useContext } from "react";
import { ToastType } from "../context/ToastProvider";
import { closeBlack, closeWhite } from "../assets";
import { SettingsContext } from "../context/SettingsProvider";

const Toast = ({ toastList }: {toastList: ToastType[]}) => {
    const { theme } = useContext(SettingsContext);
    const [list, setList] = useState<ToastType[]>(toastList);

    const close = theme === "dark" ? closeWhite : closeBlack;

    const deleteToast = (id: number) => {
        const listItemIndex = list.findIndex(e => e.id === id);
        const toastListItem = toastList.findIndex(e => e.id === id);
        list.splice(listItemIndex, 1);
        toastList.splice(toastListItem, 1);
        setList([...list]);
    }

    useEffect(() => {
        setList([...toastList]);
    }, [toastList]);

    return (
        <div className="mx-0 fixed w-[300px] max-h-[72px] bottom-10 left-[50%] -translate-x-1/2 overflow-hidden">
            {
                list.map((toast, i) =>
                    <div
                        key={i}
                        className="flex items-center w-full p-4 mb-4 text-gray-500 bg-baseTertiary rounded-lg shadow dark:text-gray-400 dark:bg-darkBaseSecondary"
                        role="alert"
                    >
                        <div 
                            className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg ${toast.type === "success" ? "text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200" : "text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200" }`}>
                            {
                                toast.type === "failure" 
                                    ? <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    : <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                            }
                            
                            <span className="sr-only">
                                {toast.type === "success" ? "Success Icon" : "Failure Icon"}
                            </span>
                        </div>
                        <div className="ml-3 text-sm font-normal">{toast.text}</div>
                        <button
                            type="button"
                            className="ml-auto -mx-1.5 -my-1.5 bg-baseTertiary text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-base inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-darkBaseSecondary dark:hover:bg-darkBaseTertiary" 
                            data-dismiss-target={toast.type === "success" ? "#toast-success" : "#toast-failure"} 
                            aria-label="Close"
                            onClick={() => deleteToast(toast.id)}
                        >
                            <span className="sr-only">Close</span>
                            <img                      
                                src={close} 
                                alt="close-icon" 
                            />
                        </button>

                    </div>
                )
            }
        </div>
    )
}

export default Toast