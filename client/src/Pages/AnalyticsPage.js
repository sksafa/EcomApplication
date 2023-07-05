import React from 'react'
import Layout from "../Components/Layout";
import AnalyticsCard from '../Components/DashboardAnalitics/AnalyticsCard/AnalyticsCard';
import AnalyticsHoriChart from '../Components/DashboardAnalitics/AnalyticsHoriChart/AnalyticsHoriChart';

const AnalyticsPage = () => {
  return (
    <Layout>
     <h1>analytics page</h1>
     <AnalyticsCard />
     <AnalyticsHoriChart />
    </Layout>
  )
}

export default AnalyticsPage