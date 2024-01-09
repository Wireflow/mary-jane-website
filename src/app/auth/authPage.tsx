import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Register from "./Register";
import SignIn from "./SignIn";

type Props = {};

const AuthPage = (props: Props) => {
  return (
    <div className="md:px-40 px-5 ">
      <div className="bg-theme-yellow  relative overflow-hidden  mb-10 rounded-xl">
        <Image
          className="m-auto  md:w-[250px] w-[150px] p-2"
          alt="Logo"
          src={"/FooterLogo.svg"}
          width={200}
          height={40}
        />
      </div>
      <div className="flex sm:justify-start justify-center items-center">
        <Tabs defaultValue="sign-in" className="z-30 ">
          <TabsList className="shadow-xl">
            <TabsTrigger
              className="data-[state=active]:bg-theme-purple w-full flex-1 data-[state=active]:text-theme-white px-[60px] py-4 rounded-r-none rounded-l-xl  bg-gray-100 md:text-md"
              value="sign-in"
            >
              Sign In
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-theme-purple flex-1 data-[state=active]:text-theme-white px-[60px] py-4 rounded-l-none rounded-r-xl bg-gray-100 md:text-md"
              value="register"
            >
              Register
            </TabsTrigger>
          </TabsList>
          <div className="mt-10">
            <TabsContent value="sign-in">
              <SignIn />
            </TabsContent>
            <TabsContent value="register">
              <Register />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthPage;
