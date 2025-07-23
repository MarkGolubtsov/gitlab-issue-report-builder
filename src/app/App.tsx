import {Button, Modal} from "antd";
import React, {useState} from "react";
import ReportBuilder from "app/view/ReportBuilder";

import './App.less';

export default function App() {
    const [visible, setVisible] = useState(false);

    return (
        <>
            {
                !visible &&
                <Button type='primary' className='report-trigger' onClick={() => setVisible(true)}>
                    Open report form
                </Button>
            }
            <Modal destroyOnHidden footer={null} open={visible} title='Git lab issues report' onCancel={handleClose}>
                <ReportBuilder/>
            </Modal>
        </>
    )

    function handleClose() {
        setVisible(false)
    }
}