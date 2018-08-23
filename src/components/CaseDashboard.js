import React from 'react';
import CaseList from "./CaseList";
import CaseFilter from "./CaseFilter";

const CaseDashboard = () => (
  <div>
    <CaseFilter />
    <CaseList />
  </div>
);

export default CaseDashboard;