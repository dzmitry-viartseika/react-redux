import * as UserActionCreators from './users/UsersActions'
import * as TodosActionCreators from './todos/TodosActions'
import * as FakeActionCreators from './fake/FakeActions'

export default {
    ...UserActionCreators,
    ...FakeActionCreators,
    ...TodosActionCreators
}
