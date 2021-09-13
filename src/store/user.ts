export const USER_STATE_NAME = 'user';

interface IUserState {
  token: string | null;
}

const initialUserState: IUserState = {
  token: null,
};

export const userReducer = (state: IUserState = initialUserState) => state;
