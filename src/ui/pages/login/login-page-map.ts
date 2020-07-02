import { Dispatch } from 'redux'
import { RootStateType } from '../../../redux/reducer'

const mapStateToProps = (state: RootStateType) => ({
    loggedUser: state.userReducer.loggedUser,
})

const mapActionsToProps = (dispatch: Dispatch) => { return { } }

export { mapStateToProps, mapActionsToProps}