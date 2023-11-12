import NavBar from "./NavBar";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <NavBar />
            <div>{ children }</div>  
        </>
    )
}