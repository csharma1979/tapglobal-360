import ProtectedRoute from "../../../ProtectedRoute";
import Layout from "../../../components/AdminPannel/Navigation/Layout";

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <Layout>
        <div>
          <h4 className=" admin-dashboard">Welcome to the Admin Dashboard</h4>
        </div>
      </Layout>
    </ProtectedRoute>
  );
};

export default Dashboard;
