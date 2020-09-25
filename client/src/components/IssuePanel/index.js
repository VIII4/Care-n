import React from "react";
import ReportIssueButton from "../ReportIssueButton";
import "./IssuePanel.css";

export default function IssuesPanel({ onReportIssueClick, submitIssueReport }) {
  return (
    <div className="overViewPanel center">
      {/* <div className="overViewPanelInnerContainer">
        <h3 className="bold">Report</h3>
      </div> */}

      {/* first row */}
      <div className="buttonPanelContainer">
        {/* Will need to create hook with issue type state and to report form from button click */}
        {/* <ReportForm submitIssueReport={submitIssueReport} /> */}
        <ReportIssueButton
          issueType="Wildlife"
          onReportIssueClick={onReportIssueClick}
        />
        <ReportIssueButton
          issueType="Structural"
          onReportIssueClick={onReportIssueClick}
        />
        <ReportIssueButton
          issueType="Utility"
          onReportIssueClick={onReportIssueClick}
        />
        <ReportIssueButton
          issueType="Roads"
          onReportIssueClick={onReportIssueClick}
        />
      </div>

      {/* second row */}
      <div className="buttonPanelContainer center">
        <ReportIssueButton
          issueType="Vandalism"
          onReportIssueClick={onReportIssueClick}
        />
        <ReportIssueButton
          issueType="Trash"
          onReportIssueClick={onReportIssueClick}
        />
        <ReportIssueButton
          issueType="Other"
          onReportIssueClick={onReportIssueClick}
        />
      </div>
    </div>
  );
}
