import protectServerPage from "@/services/next-auth/protectServerPage";
import React from "react";

type Props = {};

const Settings = async (props: Props) => {
  const { session } = await protectServerPage({
    redirectTo: "/auth?type=signin",
  });

  return <div>Settings</div>;
};

export default Settings;
