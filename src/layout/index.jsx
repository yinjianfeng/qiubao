import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Card } from "antd";

export default function Layout() {
    return (
        <>
            <Header />
            <main className="flex flex-col justify-center items-center py-5">
                <Card className="w-[1000px]">
                    <Outlet />
                </Card>
            </main>
            <Footer />
        </>
    )
}