import { getServerSession } from "next-auth";
import AddProduct from "./components/AddProduct";
import { authOption } from "./api/auth/[...nextauth]/route";

export default async function Home() {

  const session = await getServerSession(authOption)

  return (
    <main className="body">
     <h1 className="block">Hello {session && session.user!.name}</h1>
     
     <AddProduct/>
    </main>
  );
}
