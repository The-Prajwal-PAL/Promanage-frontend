import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
export const userSlice = createApi({
  reducerPath: "userSlive",
  tagTypes: ["userDetails"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://promanage-backend-eeem.onrender.com/",
    prepareHeaders: (headers) => {
      const userInfo = Cookies.get("userInfo");
      const { token } = JSON.parse(userInfo);
      if (token) {
        headers.set(`authorization`, `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    updateUserDetails: builder.mutation({
      query: (data) => ({
        url: `users/update`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});
export const { useUpdateUserDetailsMutation } = userSlice;
