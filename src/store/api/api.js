import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userApiSlice = createApi({
  reducerPath: "userapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://promanage-backend-eeem.onrender.com/",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `users/login`,
        method: "POST",
        body: data,
      }),
      providesTags: ["login"],
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `users/register`,
        method: "POST",
        body: data,
      }),
    }),
    logOut: builder.mutation({
      query: () => ({
        url: `users/logout`,
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogOutMutation } =
  userApiSlice;
