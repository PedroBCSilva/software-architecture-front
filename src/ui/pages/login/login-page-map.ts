import { Dispatch } from 'redux'
import { loginUserAction } from '../../../redux/user/user-action'
import { User } from '../../../types/user'
import { RootStateType } from '../../../redux/reducer'

const mapStateToProps = (state: RootStateType) => ({
    loggedUser: state.userReducer.loggedUser,
})

const mapActionsToProps = (dispatch: Dispatch) => {
    return {
        setLoggedUser: (user: User) => {
            dispatch(loginUserAction(user))
        }
    }
}

export { mapStateToProps, mapActionsToProps}