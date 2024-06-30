import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
export const TaskApi = createApi({
  reducerPath: "taskTodo",
  tagTypes: ["todos", "particularTodo"],
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
    particularTodo: builder.query({
      query: (body) => `todos/particular/${body}`,
      providesTags: ["particularTodo"],
    }),
    getAllTodos: builder.query({
      query: () => "/todos",
      providesTags: ["todos"],
    }),
    getDateFilter: builder.query({
      query: (body) => `todos/analytics/${body}`,
      providesTags: ["filter"],
    }),
    addTask: builder.mutation({
      query: (data) => ({
        url: `todos/addtodo`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todos", "filter", "share"],
    }),
    addLabel: builder.mutation({
      query: (data) => ({
        url: `todos/label/${data.taskId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["todos", "filter", "share", "particularTodo"],
    }),
    editTodo: builder.mutation({
      query: (data) => ({
        url: `todos/update/${data.taskId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["todos", "particularTodo", "filter", "share"],
    }),

    editCheck: builder.mutation({
      query: (data) => ({
        url: `todos/checkupdate/${data.taskId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["todos", "particularTodo", "filter", "share"],
    }),
    deleteTodo: builder.mutation({
      query: (data) => ({
        url: `todos/delete/${data}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todos", "particularTodo", "filter", "share"],
    }),
  }),
});

export const {
  useAddTaskMutation,
  useGetAllTodosQuery,
  useGetDateFilterQuery,
  useAddLabelMutation,
  useParticularTodoQuery,
  useEditTodoMutation,
  useDeleteTodoMutation,
  useEditCheckMutation,
} = TaskApi;
