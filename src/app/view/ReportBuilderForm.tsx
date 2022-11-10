import React, {useState} from "react";
import getIssueFromDocument from "app/parser/getIssueFromDocument";
import {Form, Typography} from "antd";
import IssueNumberTitleFormatter from "app/format/IssueNumberTitleFormatter";
import IssueFormatter from "app/format/IssueFormatter";

export default function ReportBuilderForm() {
    const [issues] = useState(() => getIssueFromDocument());
    const [formatter] = useState<IssueFormatter>(() => new IssueNumberTitleFormatter());

    return (
        <Form>
            <Form.Item name=''>
                {issues.map(issue =>
                    <FormattedIssueView
                        key={issue.number}
                        formattedIssue={formatter.format(issue)}/>
                )}
            </Form.Item>
        </Form>
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