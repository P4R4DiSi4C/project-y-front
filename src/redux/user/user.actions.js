export const signIn = (email, password) => dispatch => {
    // axios ici
    dispatch({
        type: 'SIGN_IN',
        payload: { email: email, password:password }
    });
};