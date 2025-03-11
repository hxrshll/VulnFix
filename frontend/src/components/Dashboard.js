import React, { useState } from 'react';
import { scanDependencies } from '../services/scannerService';

const Dashboard = () => {
  const [report, setReport] = useState(null);

  const handleScan = async () => {
    const data = await scanDependencies();
    setReport(data);
  };

  return (
    <div>
      <button onClick={handleScan}>Scan Dependencies</button>
      {report && (
        <div>
          <p>{report.dependency} - {report.version} ({report.severity})</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
