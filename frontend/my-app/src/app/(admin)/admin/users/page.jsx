"use client";

import { useGetUsers } from "@/hooks/useAuth";
import { UsersTable } from "./usersTable";

function UsersPage() {
  const { isLoading, data } = useGetUsers();
  const { users } = data || {};

  
  if (isLoading) return <>loading...</>;
  return (
    <div>
      <h1 className="text-xl font-bold mb-5">اطلاعات کاربران</h1>
      {data?.users && <UsersTable users={users} />}
    </div>
  );
}
export default UsersPage;
