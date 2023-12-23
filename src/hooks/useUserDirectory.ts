import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchUsers } from "../app/features/usersSlice";

export const useUserDirectory = () => {
  const dispatch = useAppDispatch();
  const { users, currentPage, availablePages } = useAppSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers(currentPage));
  }, []);

  const handleShowMoreUsers = () => {
    if (currentPage < availablePages) {
      dispatch(fetchUsers(currentPage));
    }
  };

  return {
    users,
    handleShowMoreUsers,
    currentPage,
    availablePages,
  };
};
