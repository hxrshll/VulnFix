import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Report = () => {
    const [report, setReport] = useState([]);

    useEffect(() => {
        const fetchReport = async () => {
            const res = await axios.get('/api/scanner/scan');
            setReport(res.data);
        };
        fetchReport();
    }, []);

    return (
        <div>
            <h2>Vulnerability Report</h2>
            <pre>{JSON.stringify(report, null, 2)}</pre>
        </div>
    );
};

export default Report;

