import { User } from "./types/UserType";
import { UserCard } from "../../../../../components/PersonCard/UserCard";
import { Button } from "../../../../../components/Button/Button";
import { useUserDirectory } from "../../../../../hooks/useUserDirectory";

import "./UserDirectory.scss";

export const UserDirectory = () => {
  const { users, handleShowMoreUsers, currentPage, availablePages } =
    useUserDirectory();

  return (
    <section className="user-directory">
      <div className="user-directory__content">
        <h2 className="user-directory__title">Working with GET request</h2>
        <section className="user-directory__users">
          {users?.map((user: User) => (
            <UserCard user={user} key={user.id} />
          ))}
        </section>
      </div>
      {currentPage < availablePages && (
        <Button
          type="button"
          text="Show more"
          onClick={handleShowMoreUsers}
          classname="user-directory__button"
        />
      )}
    </section>
  );
};
