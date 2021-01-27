import {usersAPI} from "../api/ipa";
import {updateObjectArry} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENTPAGE = 'SET_CURRENTPAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGGLE_IS_fETCHING = 'TOOGGLE_IS_fETCHING';
const TOOGGLE_IS_fOLLOWING_PROGRESS = 'TOOGGLE_IS_fOLLOWING_PROGRESS';


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectArry(state.users, action.userid,"id",{followed: true})
                         }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectArry(state.users, action.userid,"id",{followed: false })
            }
        case SET_USERS: {
            return {...state, users: action.users}

        }
        case SET_CURRENTPAGE: {
            return {...state, currentPage: action.currentPage}

        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}

        }
        case TOOGGLE_IS_fETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOOGGLE_IS_fOLLOWING_PROGRESS : {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userid]
                    : state.followingInProgress.filter(id => id !== action.userid)
            }
        }
        default:
            return state;
    }

}
export const followSuccess = (userid) => ({type: FOLLOW, userid})
export const unfollowSuccess = (userid) => ({type: UNFOLLOW, userid})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENTPAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOOGGLE_IS_fETCHING, isFetching})
export const togglefollowInProgress = (isFetching, userid) => ({
    type: TOOGGLE_IS_fOLLOWING_PROGRESS,
    isFetching,
    userid
})

export const getUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userid,apiMethod,actionCreator ) => {
    dispatch(togglefollowInProgress(true, userid))
    let response = await apiMethod(userid)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userid));
    }
    dispatch(togglefollowInProgress(false, userid));
}

export const follow = (userid) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch,userid,usersAPI.follow.bind(usersAPI), followSuccess)

    }
}
export const unfollow = (userid) => {
    return async (dispatch) => {
              followUnfollowFlow(dispatch,userid, usersAPI.unfollow.bind(usersAPI),  unfollowSuccess);
    }
}

export default usersReducer;