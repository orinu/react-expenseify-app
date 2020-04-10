import authReducer from '../../reducers/auth';

test('should set default state' , () => {
    const state = authReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({})
})

test('LOGIN - Should return object with the id', () => {
    const action = {
      type: 'LOGIN',
      uid: 1234564
    };
    const state = authReducer({}, action);
    expect(state).toEqual({
        uid: action.uid
    });
});

test('Should return an empty object', () => {
    const action = {
      type: 'LOGOUT'
    };
    const state = authReducer({uid: 'dsaadsdas'}, action);
    expect(state).toEqual({});
});
