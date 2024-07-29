import Navbar from "../Common/Navbar/Navbar";
import Sidebar from "../Common/Sidebar/Sidebar";

const UserFeeLayout = ({ children }) => {
    return (
        <div className="grid grid-cols-[auto_1fr]">
            <Sidebar />
            <main className="p-4">
                <Navbar />     
                   <div className="p-4">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default UserFeeLayout;