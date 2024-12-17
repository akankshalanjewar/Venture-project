import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IPOLIST } from "./Componenent/IpoList";
import IPODetail from "./pages/IPODetail";


export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/ipo-list" element={<IPOLIST />} />
                <Route path="/" element={<IPODetail />} />
            </Routes>
        </BrowserRouter>
    );
}