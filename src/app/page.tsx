import Image from "next/image";
import ProfileServer from "./ProfileServer";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();

  if (session?.user) {
    redirect("/home");
  }

  return (
    <main className="">
      <ProfileServer>
        <div className="">
        </div>
      </ProfileServer>
    </main>
  );
}
