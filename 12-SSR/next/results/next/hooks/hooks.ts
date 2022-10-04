import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootReducer} from "../redux/reducer";

export const useTypedSelector: TypedUseSelectorHook<RootReducer> = useSelector