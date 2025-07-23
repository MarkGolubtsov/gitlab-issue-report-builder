import React, {useState} from "react";
import getIssueFromDocument from "app/parser/getIssueFromDocument";
import {Button, message, RadioChangeEvent, Select, Space} from "antd";
import {IssueNumberTitleFormatter} from "app/format/IssueNumberTitleFormatter";
import {IssueFormatter} from "app/format/IssueFormatter";
import IssueList from "app/view/IssueList";
import {IssueNumberTitleHrefFormatter} from "app/format/IssueNumberTitleHrefFormatter";
import {IssueNumberTitleLabelsFormatter} from 'app/format/IssueNumberTitleLabelsFormatter';

const AVAILABLE_FORMATTERS: IssueFormatter[] = [
    new IssueNumberTitleFormatter(),
    new IssueNumberTitleHrefFormatter(),
    new IssueNumberTitleLabelsFormatter()
]

export default function ReportBuilder() {
    const [issues] = useState(getIssueFromDocument);
    const [formatter, setFormatter] = useState<IssueFormatter>(AVAILABLE_FORMATTERS[0]);

    const [messageApi, contextHolder] = message.useMessage();

    const selectOptions = AVAILABLE_FORMATTERS.map(it => ({label: it.name, value: it.name}));

    return (
        <Space direction='vertical'>
            {contextHolder}
            <Button type='primary' onClick={handleCopy}>
                Скопировать
            </Button>

            <div style={{width: '300px'}}>
                <Select
                    value={formatter.name}
                    size='large'
                    style={{width: '100%'}}
                    options={selectOptions}
                    onChange={handleChangeFilter}/>
            </div>

            <IssueList
                formatter={formatter}
                issues={issues}/>
        </Space>
    )

    function handleChangeFilter(name: string) {
        const formatterByName = AVAILABLE_FORMATTERS.find(it => it.name === name);

        setFormatter(formatterByName)
    }

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