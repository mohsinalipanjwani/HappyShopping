import type { NextPage } from "next";
import PageLayout from "components/PageLayout";
import DashboardScreen from "screens/DashboardScreen";

const Dashboard: NextPage = () => {
  return (
    <>
      <PageLayout>
        <DashboardScreen />
      </PageLayout>
    </>
  );
};

export default Dashboard;
