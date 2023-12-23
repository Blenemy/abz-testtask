import { User } from "../../pages/homepage/Layout/Main/UserDirectory/types/UserType";
import "./UserCard.scss";

interface UserCardprops {
  user: User;
}

export const UserCard: React.FC<UserCardprops> = ({ user }) => {
  return (
    <article className="user-card">
      <div className="user-card__content">
        <img src={user.photo} alt="userPhoto" className="user-card__photo" />
        <p className="user-card__name text-hidden">{user.name}</p>
        <section className="user-card__credentials">
          <article className="user-card__position text-hidden">
            {user.position}
          </article>
          <article className="user-card__email text-hidden">
            {user.email}
          </article>
          <article className="user-card__phoneNumber text-hidden">
            {user.phone}
          </article>
        </section>
      </div>
    </article>
  );
};
