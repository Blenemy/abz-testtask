import { Banner } from "./Banner/Banner";
import { UserDirectory } from "./UserDirectory/UserDirectory";
import { JobApplicationForm } from "./JobApplicationForm/JobApplicationForm";

import "./Main.scss";

export const Main = () => {
  return (
    <main className="main">
      <Banner />
      <UserDirectory />
      <JobApplicationForm />
    </main>
  );
};
