import Section from "@/components/ui/section";
import React from "react";
import Points from "./Points";
import UserMembership from "./UserMembership";
import { db } from "../../prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/services/next-auth";

type Props = {};

const UserServices = async (props: Props) => {
  const session = await getServerSession(authOptions);
 

  return (
    <Section size="xs">
      <div className="flex flex-wrap gap-5">
        <Points points={0} />
        <div className="flex-1">
          <UserMembership />
        </div>
      </div>
    </Section>
  );
};

export default UserServices;
