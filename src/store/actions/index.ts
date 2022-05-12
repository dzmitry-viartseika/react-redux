import * as UserActionCreators from './users/UsersActions'
import * as TodosActionCreators from './todos/TodosActions'

export default {
    ...UserActionCreators,
    ...TodosActionCreators
}
