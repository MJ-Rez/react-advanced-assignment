import React, { FC, ReactNode, useState, useEffect } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import UserType from "~/utils/types/user";
import fetchData from "../utils/fetchData";

type UsersDataContextType = {
  users?: UserType[];
  setUsers?: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading?: boolean;
  deleteUser?: (id: number) => void;
  updateUser?: (user: UserType) => void;
};
export const UsersDataContext = React.createContext<UsersDataContextType>({});

type UsersDataProviderType = {
  children: ReactNode;
};

export const UsersDataProvider: FC<UsersDataProviderType> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<UserType[]>([]);
  const deleteUser = useCallback(
    (id: number) => {
      const newList = users.filter((user) => user.id !== id);
      setUsers(newList);
    },
    [users]
  );

  const updateUser = useCallback((user: UserType) => {
    setUsers((prevUsers) => {
      return prevUsers.map((prevUser) =>
        prevUser.id === user.id ? user : prevUser
      );
    });
  }, []);

  useEffect(() => {
    // fetch the users data
    (async function () {
      let data: any = await fetchData(
        "https://jsonplaceholder.typicode.com/users"
      );

      //adding the link to their avatars from dicebear API
      let dataWithAvatar = data.map((user: UserType) => {
        const avatar = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;
        return { ...user, avatar: avatar };
      });
      setUsers(dataWithAvatar);
      setIsLoading(false);
    })();
  }, []);

  const value: any = useMemo(
    () => ({
      users,
      setUsers,
      isLoading,
      setIsLoading,
      deleteUser,
      updateUser,
    }),
    [users, setUsers, isLoading, setIsLoading, deleteUser, updateUser]
  );
  return (
    <UsersDataContext.Provider value={value}>
      {children}
    </UsersDataContext.Provider>
  );
};
