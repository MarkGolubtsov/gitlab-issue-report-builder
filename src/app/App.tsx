import React, {useState} from "react";
import {Button, Modal} from "antd";
import ReportBuilder from "app/view/ReportBuilder";

import './App.less';

export default function App() {
    const [visible, setVisible] = useState(false);

    return (
        <>
            {
                !visible &&
                <Button className='report-trigger' onClick={() => setVisible(true)}>
                    Open report form
                </Button>
            }
            <Modal destroyOnClose footer={null} open={visible} title='Git lab issues report' onCancel={handleClose}>
                <ReportBuilder/>
            </Modal>
        </>
    )

    function handleClose() {
        setVisible(false)
    }
}