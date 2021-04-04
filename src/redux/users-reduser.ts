import { UserType } from './../Types/Types';
import { PhotosType } from '../Types/Types';
import { usersAPI } from "../api/ipa";
import { updateObjectArry } from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENTPAGE = 'SET_CURRENTPAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGGLE_IS_fETCHING = 'TOOGGLE_IS_fETCHING';
const TOOGGLE_IS_fOLLOWING_PROGRESS = 'TOOGGLE_IS_fOLLOWING_PROGRESS';



let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>, //Array of users Id
};

type InitialState = typeof initialState

const usersReducer = (state = initialState, action: any): InitialState => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectArry(state.users, action.userid, "id", { followed: true })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectArry(state.users, action.userid, "id", { followed: false })
            }
        case SET_USERS: {
            return { ...state, users: action.users }

        }
        case SET_CURRENTPAGE: {
            return { ...state, currentPage: action.currentPage }

        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }

        }
        case TOOGGLE_IS_fETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOOGGLE_IS_fOLLOWING_PROGRESS: {
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

type FollowSuccessActionType = {
    type: typeof FOLLOW
    userid: number
}
export const followSuccess = (userid: number): FollowSuccessActionType => ({ type: FOLLOW, userid })

type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    userid: number
}
export const unfollowSuccess = (userid: number): UnfollowSuccessActionType => ({ type: UNFOLLOW, userid })

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}

export const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, users })

type SetCurrentPageActionType = {
    type: typeof SET_CURRENTPAGE
    currentPage: number
}

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: SET_CURRENTPAGE, currentPage })

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}

export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })

type ToggleIsFetchingActionType = {
    type: typeof TOOGGLE_IS_fETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({ type: TOOGGLE_IS_fETCHING, isFetching })

type TogglefollowInProgressActionType = {
    type: typeof TOOGGLE_IS_fOLLOWING_PROGRESS
    isFetching: boolean
    userid:number
}
export const togglefollowInProgress = (isFetching: boolean, userid: number): TogglefollowInProgressActionType => ({
    type:  TOOGGLE_IS_fOLLOWING_PROGRESS, isFetching, userid})

export const getUsers = (page: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch: any, userid: number, apiMethod: any, actionCreator: any) => {
    dispatch(togglefollowInProgress(true, userid))
    let response = await apiMethod(userid)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userid));
    }
    dispatch(togglefollowInProgress(false, userid));
}

export const follow = (userid: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(dispatch, userid, usersAPI.follow.bind(usersAPI), followSuccess)

    }
}
export const unfollow = (userid: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(dispatch, userid, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
}

export default usersReducer;