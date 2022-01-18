//초기 상태값 설정
const initialState = {
    loginModal: false,
};

//리듀서 설정
const HeaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "OPEN_LOGIN_MODAL": {
            return {
                ...state,
                loginModal: true,
            };
        }
        case "CLOSE_LOGIN_MODAL": {
            return {
                ...state,
                loginModal: false,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default HeaderReducer;
