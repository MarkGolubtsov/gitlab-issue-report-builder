import React, {useState} from "react";
import getIssueFromDocument from "app/parser/getIssueFromDocument";
import {Button, Select, Space} from "antd";
import {IssueNumberTitleFormatter} from "app/format/item/IssueNumberTitleFormatter";
import {IssueFormatter} from "app/format/IssueFormatter";
import ReportPreview from "app/view/ReportPreview";
import {IssueNumberTitleHrefFormatter} from "app/format/item/IssueNumberTitleHrefFormatter";
import {IssueNumberTitleLabelsFormatter} from 'app/format/item/IssueNumberTitleLabelsFormatter';
import {SimpleListIssueFormat} from 'app/format/list/SimpleListIssueFormat';
import {GroupByPriorityLabelIssueListFormatter} from 'app/format/list/GroupByPriorityLabelIssueListFormatter';

const AVAILABLE_ITEM_FORMATTERS: IssueFormatter[] = [
    new IssueNumberTitleFormatter(),
    new IssueNumberTitleHrefFormatter(),
    new IssueNumberTitleLabelsFormatter()
]

interface ReportBuilderProps {
    onBuild: (report: string) => void;
}

const getAvailableListFormatters = (issueFormatter: IssueFormatter) => {
    return [
        new SimpleListIssueFormat(issueFormatter),
        new GroupByPriorityLabelIssueListFormatter(issueFormatter),
    ]
}

export default function ReportBuilder(props: ReportBuilderProps) {
    const {onBuild} = props;

    const [issues] = useState(getIssueFromDocument);
    const [itemFormatter, setItemFormatter] = useState<IssueFormatter>(AVAILABLE_ITEM_FORMATTERS[0]);
    const [listFormatterName, setListFormatterName] = useState<string>(new SimpleListIssueFormat(itemFormatter).name);

    const selectOptions = AVAILABLE_ITEM_FORMATTERS.map(it => ({label: it.name, value: it.name}));

    const availableListsFormatters = getAvailableListFormatters(itemFormatter);

    const availableListFormatterOptions = availableListsFormatters
        .map(it => ({
            label: it.name,
            value: it.name
        }));

    const listFormatter = availableListsFormatters.find(it => it.name === listFormatterName)!;

    const report = listFormatter.format(issues);

    return (
        <Space direction='vertical'>
            <Button type='primary' onClick={handleCopy}>
                Скопировать
            </Button>

            <div style={{width: '300px'}}>
                <Select
                    value={itemFormatter.name}
                    size='large'
                    style={{width: '100%'}}
                    options={selectOptions}
                    onChange={handleChangeFilter}/>
            </div>

            <div style={{width: '300px'}}>
                <Select
                    value={listFormatter.name}
                    size='large'
                    style={{width: '100%'}}
                    options={availableListFormatterOptions}
                    onChange={handleChangeListFormatter}/>
            </div>

            <ReportPreview report={report}/>
        </Space>
    )

    function handleChangeFilter(name: string) {
        const formatterByName = AVAILABLE_ITEM_FORMATTERS.find(it => it.name === name);

        setItemFormatter(formatterByName)
    }

    function handleChangeListFormatter(name: string) {
        setListFormatterName(name)
    }

    function handleCopy() {
        onBuild(report);
    }
}