import React from "react";
import {Issue} from "app/model/Issue";
import {Space, Typography} from "antd";
import {IssueFormatter} from "app/format/IssueFormatter";

interface IssuesFieldProps {
    formatter: IssueFormatter;
    issues: Issue[];
}

export default function IssueList({issues, formatter}: IssuesFieldProps) {
    return (
        <Space direction='vertical' style={{maxHeight: 400, overflowX: 'scroll'}}>
            {issues.map(issue =>
                <FormattedIssueView
                    key={issue.number}
                    formattedIssue={formatter.format(issue)}/>
            )}
        </Space>
    )
}

interface FormattedIssueViewProps {
    formattedIssue: string
}

function FormattedIssueView({formattedIssue}: FormattedIssueViewProps) {
    return (
        <Typography>
            {formattedIssue}
        </Typography>
    )
}