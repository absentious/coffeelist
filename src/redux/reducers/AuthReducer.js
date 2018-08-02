

const INITIAL_STATE = { 
    email: '',
    password: '',
    user: null, 
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'email_changed':
            return { ...state, email: action.payload };
        case 'password_changed':
            return { ...state, password: action.payload };
        case 'login_user_success':
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case 'login_user_fail':
            return { ...state, 
                error: 'Auth failed', 
                password: '', 
                loading: false };
        case 'login_user':
            return { ...state, loading: true, error: '' };
        case 'logout_user':
            return INITIAL_STATE;
        default: 
            return state;
    }
};