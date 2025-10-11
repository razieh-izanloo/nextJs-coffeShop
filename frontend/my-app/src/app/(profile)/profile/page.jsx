"use client";

import { useGetUser } from "@/hooks/useAuth";
import { toLocaleDateString } from "utils/toLocaleDate";

const ProfilePage = () => {
  const { data, isLoading } = useGetUser();
  const { user } = data || {};

  return (
    <div>
      {isLoading ? (
        "loading..."
      ) : (
        <>
          <h1>
            {user.name}
            <span>خوش آمدی!</span>
          </h1>
          <span>:تاریخ پیوستن</span>
          <span className="px-1">{toLocaleDateString(user.createdAt)}</span>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
