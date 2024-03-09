import { useContext } from "react"
import { NavHoverStateContext, UseNavHoverStateContextType } from "../context/NavHoverStateProvider";

const useNavHoverState = () => {
    return useContext<UseNavHoverStateContextType>(NavHoverStateContext);
}

export default useNavHoverState