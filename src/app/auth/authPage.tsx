import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Section from "@/components/ui/section";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Image from "next/image";

type Props = {};

const AuthPage = (props: Props) => {
  return (
    <div className="md:pl-40 flex md:justify-normal justify-center ">
        <div className="flex justify-start ">
            <Tabs
              defaultValue="sign-in"
              className=" flex flex-col justify-center items-center gap-10"
            >
              <div className=" ">
                <TabsList className="">
                  <TabsTrigger
                    className="data-[state=active]:bg-theme-purple px-[60px] py-4 rounded-l-xl bg-gray-100 md:text-md"
                    value="sign-in"
                  >
                    Sign In
                  </TabsTrigger>
                  <TabsTrigger
                    className="data-[state=active]:bg-theme-purple px-[60px] py-4 rounded-r-xl bg-gray-100 md:text-md"
                    value="register"
                  >
                    Register
                  </TabsTrigger>
                </TabsList>
              </div>
              <div>
                <TabsContent value="sign-in">
                  <SignIn />
                </TabsContent>
                <TabsContent value="register">
                  <SignUp />
                </TabsContent>
              </div>
            </Tabs>
           
        </div>
        {/* <div className=" absolute right-20 top-20 ">
                <Image className="absolute right-[600px] top-[40px] lg:w-[400px] md:w-[300px] w-[200px]" src={'/Purpleplanet.svg'} alt="leaf" width={400} height={400}/>
                <Image  className="relative top-[350px] right-[200px]  " src={'/BigPurpleplanet.svg'} alt="leaf" width={450} height={400}/>
            </div> */}
    </div>
  );
};

export default AuthPage;
