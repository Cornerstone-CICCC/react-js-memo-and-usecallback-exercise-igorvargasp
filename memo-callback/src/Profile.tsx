import { memo } from "react";

interface ProfileProps {
  firstname: string;
  lastname: string;
}

const Profile = memo(function Profile({ firstname, lastname }: ProfileProps) {
  console.log("Rendered Profile Component");

  return (
    <div>
      <h2>
        {firstname} {lastname}
      </h2>
    </div>
  );
});

export default Profile;
