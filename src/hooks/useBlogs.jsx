"use client";
import axiosRequest from "@/lib/axiosRequest";

import { useQuery } from "@tanstack/react-query";


const fetchBlogs = async () => {
  return axiosRequest({
    url: "/posts", 
    method: "GET",
  });
};

export const useGetAllBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      return axiosRequest({
        url: `/posts`, 
        method: "GET",
      });
    },
  });
};


