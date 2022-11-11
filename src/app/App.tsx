import React, {useEffect, useState} from "react";
import {Modal} from "antd";
import ReportBuilder from "app/view/ReportBuilder";

import './App.less';

const TRIGGER_KEY = 'r';

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
            <ReportBuilder/>
        </Modal>
    )

    function handleClose() {
        setVisible(false)
    }
}