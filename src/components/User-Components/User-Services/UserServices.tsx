import Section from "@/components/ui/section";
import React from "react";
import Points from "./Points";
import UserMembership from "./UserMembership";
import { db } from "../../../../prisma";

type Props = {
  points?: number;
};

const UserServices = (props: Props) => {
  return (
    <Section size="xs">
      <div className="flex flex-wrap gap-5">
        <Points points={props.points || 0} />
        <div className="flex-1">
          <UserMembership />
        </div>
      </div>
    </Section>
  );
};

export default UserServices;
