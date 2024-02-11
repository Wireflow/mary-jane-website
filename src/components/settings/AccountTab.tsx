import UserDetailsForm from "../forms/UserDetailsForm";

type Props = {};

const AccountTab = (props: Props) => {
  return (
    <>
      <h2 className="md:text-xl font-semibold text-theme-black/60">Account</h2>
      <UserDetailsForm />
    </>
  );
};

export default AccountTab;
