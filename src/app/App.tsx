import React, {useEffect, useState} from "react";
import {Modal} from "antd";
import ReportBuilderForm from "app/view/ReportBuilderForm";

import './App.less';

const TRIGGER_KEY = 'k';

export default function App() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key.toLowerCase() === TRIGGER_KEY) {
                setVisible(true);
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <Modal destroyOnClose footer={null} open={visible} title='Git lab issues report' onCancel={handleClose}>
            <ReportBuilderForm/>
        </Modal>
    )

    function handleClose() {
        setVisible(false)
    }
}