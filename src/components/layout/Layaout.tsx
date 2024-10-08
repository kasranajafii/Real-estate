import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

type TLayout = {
    children: React.ReactNode;
};
function Layout({ children }: TLayout) {
    const style = { minHeight: "700px" };

    return (
        <>
            <Header />
            <div style={style}>{children}</div>
            <Footer />
        </>
    );
}

export default Layout;
