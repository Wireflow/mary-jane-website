import Section from "@/components/ui/section";
import React from "react";
import Points from "./Points";
import UserMembership from "./UserMembership";
import { db } from "../../../services/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/services/next-auth";

type Props = {};

const UserServices = async (props: Props) => {
  const session = await getServerSession(authOptions);
  const user = await db.user.findFirst({ where: { id: session?.user.id } });

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
