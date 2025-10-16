import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FetchUserPayload, LoginUserPayload, RegisterUserPayload, User } from "../../models/User";

import axios from "axios";

interface AuthenticationsSliceState {
  loggedInUser: User | undefined;
  profileUser: User | undefined;
  libraryCard: string;
  loading: boolean;
  error: boolean;
  registerSuccess: boolean;
}

const initialState: AuthenticationsSliceState = {
  loggedInUser: undefined,
  profileUser: undefined,
  libraryCard: "",
  loading: false,
  error: false,
  registerSuccess: false,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (user: LoginUserPayload, thunkAPI) => {
    try {
      const req = await axios.post("http://localhost:8000/auth/login", user);
      return req.data.user;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue({
          message:
            error.response?.data?.message || error.message || "Network Error",
          status: error.response?.status || 500,
        });
      }
      return thunkAPI.rejectWithValue({ message: 'Unexpected error occurred' });
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (user:RegisterUserPayload, thunkAPI) => {
    try{
        const req = await axios.post("http://localhost:8000/auth/register", user);
      return req.data.user;
    } catch(e){
      return thunkAPI.rejectWithValue(e)
    }
  }
)

export const fetchUser = createAsyncThunk(
  "auth/fetch",
  async (payload:FetchUserPayload, thunkAPI) => {
    try{
      const req = await axios.get(`http://localhost:8000/users/${payload.userId}`)

      const user = req.data.user;

      return {
        user,
        property: payload.property
      }
    } catch(e){
        return thunkAPI.rejectWithValue(e)
    }
  }
) 

export const updateUser = createAsyncThunk(
  'auth/update',
  async (payload:User, thunkAPI) => {
    try{
      const req = await axios.put('http://localhost:8000/users', payload);
      return req.data.user;
    } catch(e){
      throw thunkAPI.rejectWithValue(e)
    }
  }
)

export const getLibraryCard = createAsyncThunk(
  'auth/librarycard',
  async (userId:string, thunkAPI) => {
    try{
      const req = await axios.post('http://localhost:8000/card/', {user:userId})

      return req.data.libraryCard
    } catch(e){
      return thunkAPI.rejectWithValue(e)
    }
  }
)

export const AuthenticationsSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    resetRegisterSuccess(state) {
      state = {
        ...state, 
        registerSuccess: false
      }

      return state
    },

    resetUser(state, action:PayloadAction<string>){
      state = {
        ...state,
        [action.payload]: undefined
      }
    }
  },
  extraReducers: (builder) => {
    //Pending Logic
    builder.addCase(loginUser.pending, (state, action) => {
      state = {
        ...state,
        error: false,
        loading: true,
      };

      return state;
    });

    builder.addCase(registerUser.pending, (state, action) => {
      state = {
        ...state,
        error: false,
        loading: true
      }

      return state;
    })

    builder.addCase(fetchUser.pending, (state, action) => {
      state = {
        ...state,
        error: false,
        loading: true
      }

      return state;
    })

    builder.addCase(updateUser .pending, (state, action) => {
      state = {
        ...state,
        error: false,
        loading: true
      }

      return state;
    })

    builder.addCase(getLibraryCard .pending, (state, action) => {
      state = {
        ...state,
        error: false,
        loading: true
      }

      return state;
    })

    //Resolved logic
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state = {
        ...state,
        loading: false,
        loggedInUser: action.payload,
      };

      return state;
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      state = {
        ...state,
        loading: false,
        registerSuccess: true
      }

      return state;
    })

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state = {
        ...state,
        [action.payload.property]: action.payload.user, 
        loading: false
      }

      return state;
    })

    builder.addCase(updateUser.fulfilled, (state, action) => {
      state = {
        ...state,
        loggedInUser: action.payload,
        profileUser: action.payload,
        loading: false
      }

      return state;
    })

    builder.addCase(getLibraryCard.fulfilled, (state, action) => {
      state = {
        ...state,
        loading: false,
        libraryCard: action.payload._id
      }

      return state;
    })

    //Rejected Logic
    builder.addCase(loginUser.rejected, (state, action) => {
      state = {
        ...state,
        error: true,
        loading: false,
      };

      return state;
    });

    builder.addCase(registerUser.rejected, (state, action) => {
      state ={
        ...state,
        error: true,
        loading: false
      }

      return state
    })

    builder.addCase(fetchUser.rejected, (state, action) => {
      state ={
        ...state,
        error: true,
        loading: false
      }

      return state
    })
    builder.addCase(updateUser.rejected, (state, action) => {
      state ={
        ...state,
        error: true,
        loading: false
      }

      return state
    })
  },
});

export const {resetRegisterSuccess, resetUser} = AuthenticationsSlice.actions;

export default AuthenticationsSlice.reducer;
