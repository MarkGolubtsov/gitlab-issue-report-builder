import React from "react";
import { createRoot } from "react-dom/client";
import App from "app/App";
import 'antd/dist/reset.css'

const container = document.createElement('div');
document.body.append(container);
const root = createRoot(container);
root.render(<App/>);
