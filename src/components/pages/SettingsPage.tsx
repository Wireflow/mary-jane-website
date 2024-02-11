import React from "react";
import PageBanner from "../ui/page-banner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  settingsTabComponents,
  settingsTabsOptions,
} from "@/constants/settingsPage";
import Section from "../ui/section";

type Props = {};

/*
TODO: Create settings page to allow user to control their account preferences.
Components:
1. UserDetailsForm - Display all current user details and and allow to update.
2. UserChangePasswordForm - Allow user to change password by entering preview and new password.
3. UserPurchases - Display all user in-store purchases fetched from database.
3. TabComponents - each tab should have its dedicated component with its content.
*/

function renderTabs(tabsList: typeof settingsTabsOptions) {
  return tabsList.map(({ label, tab, value }, _) => {
    return (
      <TabsTrigger
        key={tab}
        value={value}
        className="md:data-[state=active]:rounded-full md:text-md px-4 py-2"
      >
        {label}
      </TabsTrigger>
    );
  });
}

function renderTabsContent(components: typeof settingsTabComponents) {
  return components.map(({ id, value, component }, _) => {
    return (
      <TabsContent key={id} value={value} className="bg-none">
        {component}
      </TabsContent>
    );
  });
}

const SettingsPage = (props: Props) => {
  return (
    <>
      <PageBanner title="Settings" background="white" left />
      <Section size="md">
        <Tabs
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
          defaultValue="account"
        >
          <TabsList className="w-full grid grid-cols-3 md:grid-cols-1 md:gap-12 bg-theme-purple/5 md:bg-transparent place-self-center md:place-self-start">
            {renderTabs(settingsTabsOptions)}
          </TabsList>
          <span className="w-[3px] bg-theme-black/10 rounded-full h-full place-self-end hidden lg:block" />
          <div className="md:col-span-10 md:col-start-3 md:ml-20">
            {renderTabsContent(settingsTabComponents)}
          </div>
        </Tabs>
      </Section>
    </>
  );
};

export default SettingsPage;
