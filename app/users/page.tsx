import React, { Suspense } from "react";
import Timekeeper from "../components/Timekeeper";
import Link from "next/dist/client/link";
import UserTable from "./UserTable";

interface Props {
  searchParams: { sort: string };
}


const UserPage = async ({searchParams : {sort}}: Props) => {
  return (
    <>
      <h1>Users</h1>

      <Link href={"/users/newuser"} className="btn p-2 m-2 bg-slate-700 text-white">New User</Link>
      {/* <h3>
        <Timekeeper />
      </h3> */}


      <Suspense fallback={<h1>Loading...</h1>}>
      <UserTable sortType={sort} />
      </Suspense>
    </>
  );
};

export default UserPage;
