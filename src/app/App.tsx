import {FloatButton, message, Modal} from "antd";
import React, {useState} from "react";
import ReportBuilder from "app/view/ReportBuilder";

import './App.less';

export default function App() {
    const [visible, setVisible] = useState(false);

    const [messageApi, contextHolder] = message.useMessage();

    return (
        <>
            <FloatButton
                style={{insetBlockEnd: 10}}
                onClick={() => setVisible(true)}
                tooltip={{
                    title: 'Открыть форму копирования Issues',
                    color: 'blue',
                    placement: 'topLeft',
                }}
            />
            {contextHolder}
            <Modal destroyOnHidden footer={null} open={visible} title='Настройка отчета' onCancel={handleClose}>
                <ReportBuilder onBuild={handleReportBuild}/>
            </Modal>
        </>
    )

    function handleClose() {
        setVisible(false)
    }

    function handleReportBuild(report: string) {
        navigator.clipboard.writeText(report)
            .then(() => {
                messageApi.success('Задачи скопированы в буфер обмена.')
            })
            .catch((er) => {
                console.log('ERROR: ' + JSON.stringify(er));

                messageApi.error(`Произошла ошибка с копированием`)
            })
    }
}