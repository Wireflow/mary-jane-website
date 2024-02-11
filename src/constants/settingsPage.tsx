import AccountTab from "@/components/settings/AccountTab";
import PurchasesTab from "@/components/settings/PurchasesTab";
import SecurityTab from "@/components/settings/SecurityTab";

export const settingsTabsOptions = [
  { tab: "tab1", value: "account", label: "Account" },
  { tab: "tab2", value: "security", label: "Security" },
  { tab: "tab3", value: "purchases", label: "Purchases" },
];

export const settingsTabComponents = [
  { id: "tabcomponent1", value: "account", component: <AccountTab /> },
  { id: "tabcomponent2", value: "security", component: <SecurityTab /> },
  { id: "tabcomponent3", value: "purchases", component: <PurchasesTab /> },
];
