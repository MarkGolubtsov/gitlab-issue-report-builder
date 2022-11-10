import React from "react";
import { createRoot } from "react-dom/client";
import App from "app/App";
import 'antd/dist/antd.less';

const container = document.createElement('div');
document.body.append(container);
const root = createRoot(container);
root.render(<App/>);
