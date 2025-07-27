import React from 'react';
import CohortDetails from './components/CohortDetails';
import styles from './components/CohortDetails.module.css';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Cohorts Details</div>

      <CohortDetails
        code="INTADMDF10"
        name=".NET FSD"
        startDate="22-Feb-2022"
        status="Scheduled"
        coach="Aathma"
        trainer="Jojo Jose"
      />

      <CohortDetails
        code="ADM21JF014"
        name="Java FSD"
        startDate="10-Sep-2021"
        status="Ongoing"
        coach="Apoorv"
        trainer="Elisa Smith"
      />

      <CohortDetails
        code="CDBJF21025"
        name="Java FSD"
        startDate="24-Dec-2021"
        status="Ongoing"
        coach="Aathma"
        trainer="John Doe"
      />
    </div>
  );
}

export default App;
