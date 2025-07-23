import React, {useState} from "react";
import getIssueFromDocument from "app/parser/getIssueFromDocument";
import {Button, message, Radio, RadioChangeEvent, Space} from "antd";
import IssueNumberTitleFormatter from "app/format/IssueNumberTitleFormatter";
import IssueFormatter from "app/format/IssueFormatter";
import IssueList from "app/view/IssueList";
import {IssueNumberTitleHrefFormatter} from "app/format/IssueNumberTitleHrefFormatter";
import {IssueNumberTitleLabelsFormatter} from 'app/format/IssueNumberTitleLabelsFormatter';

const issueNumberTitleFormatter = new IssueNumberTitleFormatter();
const issueNumberTitleHrefFormatter = new IssueNumberTitleHrefFormatter();
const issueNumberTitleLabelsFormatter = new IssueNumberTitleLabelsFormatter();

export default function ReportBuilder() {
    const [issues] = useState(getIssueFromDocument);
    const [formatter, setFormatter] = useState<IssueFormatter>(issueNumberTitleFormatter);

    const [messageApi, contextHolder] = message.useMessage();

    return (
        <Space direction='vertical'>
            {contextHolder}
            <Button type='primary' onClick={handleCopy}>
                Copy to clipboard
            </Button>

            <Radio.Group value={formatter} onChange={handleChangeFormatter}>
                <Radio.Button value={issueNumberTitleFormatter}>
                    Number Title
                </Radio.Button>
                <Radio.Button value={issueNumberTitleHrefFormatter}>
                    Number Title Href
                </Radio.Button>
                <Radio.Button value={issueNumberTitleLabelsFormatter}>
                    Number Title Formatter
                </Radio.Button>
            </Radio.Group>

            <IssueList
                formatter={formatter}
                issues={issues}/>
        </Space>
    )

    function handleChangeFormatter(e: RadioChangeEvent) {
        setFormatter(e.target.value)
    }

    function handleCopy() {
        const copyData = issues.reduce((acc, issue) => acc + formatter.format(issue) + '\n', '');

        navigator.clipboard.writeText(copyData)
            .then(() => {
                messageApi.success('Задачи скопированы в буфер обмена.')
            })
            .catch((er) => {
                console.log('ERROR: ' + JSON.stringify(er));

                messageApi.error(`Произошла ошибка с копированием`)
            })
    }
}