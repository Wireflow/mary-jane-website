import SettingsPage from "@/components/pages/SettingsPage";
import protectServerPage from "@/services/next-auth/protectServerPage";
import React from "react";

type Props = {};

const Settings = async (props: Props) => {
  const { session } = await protectServerPage({
    redirectTo: "/auth?type=signin",
  });

  return <SettingsPage />;
};

export default Settings;
