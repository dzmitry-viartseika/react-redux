import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export const useActions = (creators: any) => {
    const dispatch = useDispatch()
    return bindActionCreators(creators, dispatch)
}
