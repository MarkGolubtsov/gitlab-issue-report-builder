import {Button, Modal} from "antd";
import { FloatButton } from 'antd';
import React, {useState} from "react";
import ReportBuilder from "app/view/ReportBuilder";

import './App.less';

export default function App() {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <FloatButton
                style={{ insetBlockEnd: 10 }}
                onClick={() => setVisible(true)}
                tooltip={{
                    title: 'Открыть форму копирования Issues',
                    color: 'blue',
                    placement: 'topLeft',
                }}
            />
            <Modal destroyOnHidden footer={null} open={visible} title='Настройка отчета' onCancel={handleClose}>
                <ReportBuilder/>
            </Modal>
        </>
    )

    function handleClose() {
        setVisible(false)
    }
}