import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex gap-2 justify-between">
      {user ? (
        <Link href={"/user/dasboard"} className="py-1">
          Dasboard
        </Link>
      ) : null}
      <Link href={actionURL} className="bg-color-dark text-color-accent py-1 px-12">
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
