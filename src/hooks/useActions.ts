import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import UserActionCreators from '../store/actions/'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(UserActionCreators, dispatch)
}
