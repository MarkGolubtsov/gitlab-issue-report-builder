import React from "react";

interface ReportPreviewProps {
    report: string
}

export default function ReportPreview({report}: ReportPreviewProps) {
    return (
        <div style={{
            maxHeight: 500,
            overflowY: 'auto',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word'
        }}>
            {report}
        </div>

    )
}