import {useState} from 'react';
import PopUpImage from './PopUpImage';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

// Simple To Do
import SimpleToDoTheme from '../../../assets/images/projects/Simple-To-Do/Theme.png';
import SimpleToDoHomeLight from '../../../assets/images/projects/Simple-To-Do/home-light.png';
import SimpleToDoHomeDark from '../../../assets/images/projects/Simple-To-Do/home-dark.png';
import SimpleToDoHomeMySQLDB from '../../../assets/images/projects/Simple-To-Do/mysql-db.png';
import SimpleToDoHomeTests from '../../../assets/images/projects/Simple-To-Do/tests.png';

// Leave Management System
// import LeaveManagementTheme from '../../../assets/images/projects/Leave-Management-System/Theme.png';
import LeaveManagementHome from '../../../assets/images/projects/Leave-Management-System/Home.png';
import LeaveManagementRegister from '../../../assets/images/projects/Leave-Management-System/Register.png';
import LeaveManagementLogin from '../../../assets/images/projects/Leave-Management-System/Login.png';
import LeaveManagementEmployeeDashboard
    from '../../../assets/images/projects/Leave-Management-System/Employee-Dashboard.png';
import LeaveManagementApplyForLeave from '../../../assets/images/projects/Leave-Management-System/Apply-For-Leave.png';
import LeaveManagementAdminDashboard from '../../../assets/images/projects/Leave-Management-System/Admin-Dashboard.png';
import LeaveManagementLeaveAnalysis from '../../../assets/images/projects/Leave-Management-System/Leave-Analysis.png';
import LeaveManagementCodes from '../../../assets/images/projects/Leave-Management-System/Codes.png';

// Laptop Hive MERN
// import LaptopHiveTheme from '../../../assets/images/projects/Laptop-Hive-MERN/Theme.png';
import LaptopHiveLogin from '../../../assets/images/projects/Laptop-Hive-MERN/Login.png';
import LaptopHiveAdminPanel from '../../../assets/images/projects/Laptop-Hive-MERN/Admin Panel.png';
import LaptopHiveManageProducts from '../../../assets/images/projects/Laptop-Hive-MERN/Manage Products.png';
import LaptopHiveManageOrders from '../../../assets/images/projects/Laptop-Hive-MERN/Manage Orders.png';
import LaptopHiveNoteUserPanel from '../../../assets/images/projects/Laptop-Hive-MERN/User Panel.png';
import LaptopHiveNoteUserPanel2 from '../../../assets/images/projects/Laptop-Hive-MERN/User Panel2.png';
import LaptopHiveNoteUserPanel3 from '../../../assets/images/projects/Laptop-Hive-MERN/User Panel3.png';
import LaptopHiveManageProfile from '../../../assets/images/projects/Laptop-Hive-MERN/Manage Profile.png';
import LaptopHiveProducts from '../../../assets/images/projects/Laptop-Hive-MERN/Products.png';
import LaptopHiveFilters from '../../../assets/images/projects/Laptop-Hive-MERN/Filters.png';
import LaptopHiveWishlist from '../../../assets/images/projects/Laptop-Hive-MERN/Wishlist.png';
import LaptopHiveCart from '../../../assets/images/projects/Laptop-Hive-MERN/Cart.png';
import LaptopHivePurchase from '../../../assets/images/projects/Laptop-Hive-MERN/Purchase.png';
import LaptopHiveViewOrderHistory from '../../../assets/images/projects/Laptop-Hive-MERN/View Order History.png';
import LaptopHiveCodes from '../../../assets/images/projects/Laptop-Hive-MERN/Codes.png';

// Google Keep Clone
// import GoogleKeepCloneTheme from '../../../assets/images/projects/Google-Keep-Clone/Theme.png';
import GoogleKeepCloneHome from '../../../assets/images/projects/Google-Keep-Clone/Home.png';
import GoogleKeepCloneRegister from '../../../assets/images/projects/Google-Keep-Clone/Register.png';
import GoogleKeepCloneLogin from '../../../assets/images/projects/Google-Keep-Clone/Login.png';
import GoogleKeepCloneDashboard from '../../../assets/images/projects/Google-Keep-Clone/Dashboard.png';
import GoogleKeepCloneNoteCreation from '../../../assets/images/projects/Google-Keep-Clone/Note-Creation.png';
import GoogleKeepCloneNoteList from '../../../assets/images/projects/Google-Keep-Clone/Note-List.png';

// Simple POS - Laravel
// import LaravelPOSTheme from '../../../assets/images/projects/Simple-POS-Laravel/Theme.png';
import LaaravelPOSDashboard from '../../../assets/images/projects/Simple-POS-Laravel/dashboard.png';
import LaaravelPOSCustomer from '../../../assets/images/projects/Simple-POS-Laravel/customer_management.png';
import LaaravelPOSItem from '../../../assets/images/projects/Simple-POS-Laravel/item_management.png';
import LaaravelPOSPlaceOrder from '../../../assets/images/projects/Simple-POS-Laravel/order_management.png';
import LaaravelPOSOrderDetails from '../../../assets/images/projects/Simple-POS-Laravel/order_details.png';
import LaaravelPOSCodes from '../../../assets/images/projects/Simple-POS-Laravel/Codes.png';

// Shoe Shop Management System
// import ShoeShopTheme from '../../../assets/images/projects/Shoe-Shop/Theme.png';
import ShoeShopHome from '../../../assets/images/projects/Shoe-Shop/Home.png';
import ShoeShopSignUp from '../../../assets/images/projects/Shoe-Shop/SignUp.png';
import ShoeShopSignIn from '../../../assets/images/projects/Shoe-Shop/SignIn.png';
import ShoeShopAdminDashboard from '../../../assets/images/projects/Shoe-Shop/Admin-Dashboard.png';
import ShoeShopCustomer from '../../../assets/images/projects/Shoe-Shop/Customer.png';
import ShoeShopEmployee from '../../../assets/images/projects/Shoe-Shop/Employee.png';
import ShoeShopSupplier from '../../../assets/images/projects/Shoe-Shop/Supplier.png';
import ShoeShopInventory from '../../../assets/images/projects/Shoe-Shop/Inventory.png';
import ShoeShopSales from '../../../assets/images/projects/Shoe-Shop/Sales.png';
import ShoeShopAdmin from '../../../assets/images/projects/Shoe-Shop/Admin.png';
import ShoeShopUser from '../../../assets/images/projects/Shoe-Shop/User.png';
import ShoeShopCodes from '../../../assets/images/projects/Shoe-Shop/Codes.png';

// Computer Shop Management System
// import ComputerShopTheme from '../../../assets/images/projects/Computer-Shop/Theme.png';
import ComputerShopLogin from '../../../assets/images/projects/Computer-Shop/Login.png';
import ComputerShopAdminDashboard from '../../../assets/images/projects/Computer-Shop/Admin-Dashboard.png';
import ComputerShopCustomer from '../../../assets/images/projects/Computer-Shop/Customer.png';
import ComputerShopSupplier from '../../../assets/images/projects/Computer-Shop/Supplier.png';
import ComputerShopStore from '../../../assets/images/projects/Computer-Shop/Store.png';
import ComputerShopSalary from '../../../assets/images/projects/Computer-Shop/Salary.png';
import ComputerShopOrders from '../../../assets/images/projects/Computer-Shop/Orders.png';
import ComputerShopReports from '../../../assets/images/projects/Computer-Shop/Reports.png';
import ComputerShopCustomerReport from '../../../assets/images/projects/Computer-Shop/Customer-Report.png';
import ComputerShopCodes from '../../../assets/images/projects/Computer-Shop/Codes.png';

// Hostel Management System
// import HostelManagementTheme from '../../../assets/images/projects/Hostel-Management/Theme.png';
import HostelManagementHome from '../../../assets/images/projects/Hostel-Management/Home.png';
import HostelManagementAdminDashboard from '../../../assets/images/projects/Hostel-Management/Admin-Dashboard.png';
import HostelManagementStudents from '../../../assets/images/projects/Hostel-Management/Students.png';
import HostelManagementRooms from '../../../assets/images/projects/Hostel-Management/Rooms.png';
import HostelManagementReservation from '../../../assets/images/projects/Hostel-Management/Reservation.png';
import HostelManagementKeyMoney from '../../../assets/images/projects/Hostel-Management/Key-Money.png';
import HostelManagementUser from '../../../assets/images/projects/Hostel-Management/User.png';
import HostelManagementReports from '../../../assets/images/projects/Hostel-Management/Reports.png';
import HostelManagementCodes from '../../../assets/images/projects/Hostel-Management/Codes.png';

// Chat Application
// import ChatRoomTheme from '../../../assets/images/projects/Chat-Application/Theme.png';
import ChatRoom1 from '../../../assets/images/projects/Chat-Application/Chat-Room-1.png';
import ChatRoom2 from '../../../assets/images/projects/Chat-Application/Chat-Room-2.png';
import ChatApplicationCodes from '../../../assets/images/projects/Chat-Application/Codes.png';
import ChatApplicationLiveChatRoom from '../../../assets/images/projects/Chat-Application/Live-Chat-Room.gif';

// Shoe Shop Landing Page
// import ShoeShopLandingTheme from '../../../assets/images/projects/Shoe-Shop-Landing/Theme.png';
import ShoeShopLandingHome from '../../../assets/images/projects/Shoe-Shop-Landing/Home.png';
import ShoeShopLandingAbout from '../../../assets/images/projects/Shoe-Shop-Landing/About.png';
import ShoeShopLandingShoeCollection1 from '../../../assets/images/projects/Shoe-Shop-Landing/Shoe-Collection-1.png';
import ShoeShopLandingShoeCollection2 from '../../../assets/images/projects/Shoe-Shop-Landing/Shoe-Collection-2.png';
import ShoeShopLandingCTA from '../../../assets/images/projects/Shoe-Shop-Landing/CTA.png';
import ShoeShopLandingReviews from '../../../assets/images/projects/Shoe-Shop-Landing/Reviews.png';
import ShoeShopLandingDiscount from '../../../assets/images/projects/Shoe-Shop-Landing/Discount.png';
import ShoeShopLandingContacts from '../../../assets/images/projects/Shoe-Shop-Landing/Contacts.png';
import ShoeShopLandingCodes from '../../../assets/images/projects/Shoe-Shop-Landing/Codes.png';

// Portfolio v1
// import PortfolioTheme from '../../../assets/images/projects/My-Portfolio/Theme.png';
import PortfolioHome from '../../../assets/images/projects/My-Portfolio/Home.png';
import PortfolioAbout from '../../../assets/images/projects/My-Portfolio/About.png';
import PortfolioSkills from '../../../assets/images/projects/My-Portfolio/Skills.png';
import PortfolioServices from '../../../assets/images/projects/My-Portfolio/Services.png';
import PortfolioProjects from '../../../assets/images/projects/My-Portfolio/Projects.png';
import PortfolioAssignments from '../../../assets/images/projects/My-Portfolio/Assignments.png';
import PortfolioApplications from '../../../assets/images/projects/My-Portfolio/Applications.png';
import PortfolioGallery from '../../../assets/images/projects/My-Portfolio/Gallery.png';
import PortfolioContact from '../../../assets/images/projects/My-Portfolio/Contact.png';
import PortfolioContact2 from '../../../assets/images/projects/My-Portfolio/Contact2.png';
import PortfolioCodes from '../../../assets/images/projects/My-Portfolio/Codes.png';

// LinkedIn Clone
// import LinkedInCloneTheme from '../../../assets/images/projects/LinkedIn-Clone/Theme.png';
import LinkedInCloneHome from '../../../assets/images/projects/LinkedIn-Clone/Home.png';
import LinkedInCloneNetwork from '../../../assets/images/projects/LinkedIn-Clone/Network.png';
import LinkedInClonePost from '../../../assets/images/projects/LinkedIn-Clone/Post.png';
import LinkedInCloneNotification from '../../../assets/images/projects/LinkedIn-Clone/Notification.png';
import LinkedInCloneJobs from '../../../assets/images/projects/LinkedIn-Clone/Jobs.png';
import LinkedInCloneProfile from '../../../assets/images/projects/LinkedIn-Clone/Profile.png';
import LinkedInCloneCodes from '../../../assets/images/projects/LinkedIn-Clone/Codes.png';

// MERN POS System
// import MERNPOSTheme from '../../../assets/images/projects/MERN-POS/Theme.png';
import MERNPOSCustomer from '../../../assets/images/projects/MERN-POS/Customer.png';
import MERNPOSItem from '../../../assets/images/projects/MERN-POS/Item.png';
import MERNPOSCodes from '../../../assets/images/projects/MERN-POS/Codes.png';

// Connect 4 Game
// import Connect4Theme from '../../../assets/images/projects/Connect-4-Game/Theme.png';
import Connect4UserName from '../../../assets/images/projects/Connect-4-Game/User-Name.png';
import Connect4GamePlay from '../../../assets/images/projects/Connect-4-Game/Game-Play.png';
import Connect4Codes from '../../../assets/images/projects/Connect-4-Game/Codes.png';

// Portfolio v2
// import PortfolioV2Theme from '../../../assets/images/projects/My-Portfolio-V2/Theme.png';
import PortfolioV2Home from '../../../assets/images/projects/My-Portfolio-V2/Home.png';
import PortfolioV2About from '../../../assets/images/projects/My-Portfolio-V2/About.png';
import PortfolioV2Skills from '../../../assets/images/projects/My-Portfolio-V2/Skills.png';
import PortfolioV2Projects1 from '../../../assets/images/projects/My-Portfolio-V2/Projects1.png';
import PortfolioV2Projects2 from '../../../assets/images/projects/My-Portfolio-V2/Projects2.png';
import PortfolioV2Projects3 from '../../../assets/images/projects/My-Portfolio-V2/Projects3.png';
import PortfolioV2Services from '../../../assets/images/projects/My-Portfolio-V2/Services.png';
import PortfolioV2Contacts from '../../../assets/images/projects/My-Portfolio-V2/Contacts.png';
import PortfolioV2Codes from '../../../assets/images/projects/My-Portfolio-V2/Codes.png';

// student Management System - CLI
// import StudentManagementTheme from '../../../assets/images/projects/Student-CLI/Theme.png';
import StudentManagementCodes from '../../../assets/images/projects/Student-CLI/Codes.png';

// POS FrontEnd - React
// import POSFrontendTheme from '../../../assets/images/projects/POS-FrontEnd-React/Theme.png';
import POSFrontendHome from '../../../assets/images/projects/POS-FrontEnd-React/Home.png';
import POSFrontendCustomer from '../../../assets/images/projects/POS-FrontEnd-React/Customer.png';
import POSFrontendItem from '../../../assets/images/projects/POS-FrontEnd-React/Item.png';
import POSFrontendOrder from '../../../assets/images/projects/POS-FrontEnd-React/Order.png';
import POSFrontendOrderDetails from '../../../assets/images/projects/POS-FrontEnd-React/OrderDetails.png';
import POSFrontendCodes from '../../../assets/images/projects/POS-FrontEnd-React/Codes.png';

// POS BackEnd - Spring
// import POSBackendSpringTheme from '../../../assets/images/projects/POS-BackEnd-Spring/Theme.png';
import POSBackendSpringCustomer from '../../../assets/images/projects/POS-BackEnd-Spring/Customer.png';
import POSBackendSpringItem from '../../../assets/images/projects/POS-BackEnd-Spring/Item.png';
import POSBackendSpringCodes from '../../../assets/images/projects/POS-BackEnd-Spring/Codes.png';

// POS BackEnd - SpringBoot
// import POSBackendSpringBootTheme from '../../../assets/images/projects/POS-BackEnd-SpringBoot/Theme.png';
import POSBackendSpringBootCustomer from '../../../assets/images/projects/POS-BackEnd-SpringBoot/Customer.png';
import POSBackendSpringBootItem from '../../../assets/images/projects/POS-BackEnd-SpringBoot/Item.png';
import POSBackendSpringBootCodes from '../../../assets/images/projects/POS-BackEnd-SpringBoot/Codes.png';

// JavaEE POS
// import JavaEEPOSTheme from '../../../assets/images/projects/JavaEE-POS/Theme.png';
import JavaEEPOSHome from '../../../assets/images/projects/JavaEE-POS/Home.png';
import JavaEEPOSCustomer from '../../../assets/images/projects/JavaEE-POS/Customer.png';
import JavaEEPOSItem from '../../../assets/images/projects/JavaEE-POS/Item.png';
import JavaEEPOSOrders from '../../../assets/images/projects/JavaEE-POS/Orders.png';
import JavaEEPOSOrderDetails from '../../../assets/images/projects/JavaEE-POS/OrderDetails.png';
import JavaEEPOSPOSCodes from '../../../assets/images/projects/JavaEE-POS/Codes.png';

const simpleToDoImages = [
    // SimpleToDoTheme,
    SimpleToDoHomeDark,
    SimpleToDoHomeLight,
    SimpleToDoHomeMySQLDB,
    SimpleToDoHomeTests,
];

const leaveManagementImages = [
    // LeaveManagementTheme,
    LeaveManagementHome,
    LeaveManagementRegister,
    LeaveManagementLogin,
    LeaveManagementEmployeeDashboard,
    LeaveManagementApplyForLeave,
    LeaveManagementAdminDashboard,
    LeaveManagementLeaveAnalysis,
    LeaveManagementCodes,
];

const laptopHiveImages = [
    // LaptopHiveTheme,
    LaptopHiveLogin,
    LaptopHiveAdminPanel,
    LaptopHiveManageProducts,
    LaptopHiveManageOrders,
    LaptopHiveNoteUserPanel,
    LaptopHiveNoteUserPanel2,
    LaptopHiveNoteUserPanel3,
    LaptopHiveManageProfile,
    LaptopHiveProducts,
    LaptopHiveFilters,
    LaptopHiveWishlist,
    LaptopHiveCart,
    LaptopHivePurchase,
    LaptopHiveViewOrderHistory,
    LaptopHiveCodes,
];

const googleKeepCloneImages = [
    // GoogleKeepCloneTheme,
    GoogleKeepCloneHome,
    GoogleKeepCloneRegister,
    GoogleKeepCloneLogin,
    GoogleKeepCloneDashboard,
    GoogleKeepCloneNoteCreation,
    GoogleKeepCloneNoteList,
];

const laravelPOSImages = [
    // LaravelPOSTheme,
    LaaravelPOSDashboard,
    LaaravelPOSCustomer,
    LaaravelPOSItem,
    LaaravelPOSPlaceOrder,
    LaaravelPOSOrderDetails,
    LaaravelPOSCodes,
];

const shoeShopImages = [
    // ShoeShopTheme,
    ShoeShopHome,
    ShoeShopSignUp,
    ShoeShopSignIn,
    ShoeShopAdminDashboard,
    ShoeShopCustomer,
    ShoeShopEmployee,
    ShoeShopSupplier,
    ShoeShopInventory,
    ShoeShopSales,
    ShoeShopAdmin,
    ShoeShopUser,
    ShoeShopCodes,
];

const computerShopImages = [
    // ComputerShopTheme,
    ComputerShopLogin,
    ComputerShopAdminDashboard,
    ComputerShopCustomer,
    ComputerShopSupplier,
    ComputerShopStore,
    ComputerShopSalary,
    ComputerShopOrders,
    ComputerShopReports,
    ComputerShopCustomerReport,
    ComputerShopCodes,
];

const hostelManagementImages = [
    // HostelManagementTheme,
    HostelManagementHome,
    HostelManagementAdminDashboard,
    HostelManagementStudents,
    HostelManagementRooms,
    HostelManagementReservation,
    HostelManagementKeyMoney,
    HostelManagementUser,
    HostelManagementReports,
    HostelManagementCodes,
];

const chatApplicationImages = [
    // ChatRoomTheme,
    ChatRoom1,
    ChatRoom2,
    ChatApplicationCodes,
    ChatApplicationLiveChatRoom,
];

const shoeShopLandingImages = [
    // ShoeShopLandingTheme,
    ShoeShopLandingHome,
    ShoeShopLandingAbout,
    ShoeShopLandingShoeCollection1,
    ShoeShopLandingShoeCollection2,
    ShoeShopLandingCTA,
    ShoeShopLandingReviews,
    ShoeShopLandingDiscount,
    ShoeShopLandingContacts,
    ShoeShopLandingCodes,
];

const portfolioImages = [
    // PortfolioTheme,
    PortfolioHome,
    PortfolioAbout,
    PortfolioSkills,
    PortfolioServices,
    PortfolioProjects,
    PortfolioAssignments,
    PortfolioApplications,
    PortfolioGallery,
    PortfolioContact,
    PortfolioContact2,
    PortfolioCodes,
];

const linkedInCloneImages = [
    // LinkedInCloneTheme,
    LinkedInCloneHome,
    LinkedInCloneNetwork,
    LinkedInClonePost,
    LinkedInCloneNotification,
    LinkedInCloneJobs,
    LinkedInCloneProfile,
    LinkedInCloneCodes,
];

const mernPOSImages = [
    // MERNPOSTheme,
    MERNPOSCustomer,
    MERNPOSItem,
    MERNPOSCodes,
];

const connect4Images = [
    // Connect4Theme,
    Connect4UserName,
    Connect4GamePlay,
    Connect4Codes,
];

const portfolioV2Images = [
    // PortfolioV2Theme,
    PortfolioV2Home,
    PortfolioV2About,
    PortfolioV2Skills,
    PortfolioV2Projects1,
    PortfolioV2Projects2,
    PortfolioV2Projects3,
    PortfolioV2Services,
    PortfolioV2Contacts,
    PortfolioV2Codes,
];

const studentCLIImages = [
    // StudentManagementTheme,
    StudentManagementCodes
];

const posFrontendImages = [
    // POSFrontendTheme,
    POSFrontendHome,
    POSFrontendCustomer,
    POSFrontendItem,
    POSFrontendOrder,
    POSFrontendOrderDetails,
    POSFrontendCodes
];

const posBackendSpringImages = [
    // POSBackendSpringTheme,
    POSBackendSpringCustomer,
    POSBackendSpringItem,
    POSBackendSpringCodes
];

const posBackendSpringBootImages = [
    // POSBackendSpringBootTheme,
    POSBackendSpringBootCustomer,
    POSBackendSpringBootItem,
    POSBackendSpringBootCodes
];

const javaeePOSImages = [
    // JavaEEPOSTheme,
    JavaEEPOSHome,
    JavaEEPOSCustomer,
    JavaEEPOSItem,
    JavaEEPOSOrders,
    JavaEEPOSOrderDetails,
    JavaEEPOSPOSCodes
];

export function Projects() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState('');

    const [currentSimpleToDoImage, setCurrentSimpleToDoImage] = useState(0);
    const [currentLeaveManagementImage, setCurrentLeaveManagementImage] = useState(0);
    const [currentLaptopHiveImage, setCurrentLaptopHiveImage] = useState(0);
    const [currentGoogleKeepCloneImage, setCurrentGoogleKeepCloneImage] = useState(0);
    const [currentLaravelPOSImage, setCurrentLaravelPOSImage] = useState(0);
    const [currentShoeShopImage, setCurrentShoeShopImage] = useState(0);
    const [currentComputerShopImage, setCurrentComputerShopImage] = useState(0);
    const [currentHostelManagementImage, setCurrentHostelManagementImage] = useState(0);
    const [currentChatApplicationImage, setCurrentChatApplicationImage] = useState(0);
    const [currentShoeShopLandingImage, setCurrentShoeShopLandingImage] = useState(0);
    const [currentPortfolioImage, setCurrentPortfolioImage] = useState(0);
    const [currentLinkedinImage, setCurrentLinkedinImage] = useState(0);
    const [currentMernPOSImage, setCurrentMernPOSImage] = useState(0);
    const [currentConnect4Image, setCurrentConnect4Image] = useState(0);
    const [currentPortfolioV2Image, setCurrentPortfolioV2Image] = useState(0);
    const [currentStudentCLIImage, setCurrentStudentCLIImage] = useState(0);
    const [currentPOSFrontendImage, setCurrentPOSFrontendImage] = useState(0);
    const [currentPOSBackendSpringImage, setCurrentPOSBackendSpringImage] = useState(0);
    const [currentPOSBackendSpringBootImage, setCurrentPOSBackendSpringBootImage] = useState(0);
    const [currentJavaEEPOSImage, setCurrentJavaEEPOSImage] = useState(0);

    const openModal = (projectType) => {
        setIsModalOpen(true);
        setCurrentProject(projectType);
    };

    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-darkBlue pt-20 pb-5">
            <h1 className="text-4xl font-bold text-center text-neonBlue bg-darkBlue">My Projects</h1>

            <div className="max-w-7xl px-6 space-y-32 mt-20">

                <ProjectCard projectName="Simple To Do"
                             description="This Simple To-Do app is a self-initiated full-stack project built to simplify daily task management. I focused on creating a clean, user-friendly, and scalable platform that allows users to efficiently add, view, and complete tasks — showcasing practical full-stack development skills and seamless integration between Laravel, React, and MySQL."
                             technologies={["React", "Vite", "TypeScript", "Tailwind CSS", "Laravel", "MySQL", "Docker", "Docker Compose"]}
                             githubLink="https://github.com/Kavithma-Thushal/simple-to-do-coveragex.git"
                             images={simpleToDoImages}
                             currentImageIndex={currentSimpleToDoImage}
                             onNextImage={() => setCurrentSimpleToDoImage((prev) => (prev + 1) % simpleToDoImages.length)}
                             onPreviousImage={() => setCurrentSimpleToDoImage((prev) => (prev - 1 + simpleToDoImages.length) % simpleToDoImages.length)}
                             onClickImage={() => openModal('simpleToDo')}/>

                <ProjectCard projectName="Leave Management System"
                             description="This Leave Management System, is a self-initiated full-stack application built to streamline organizational leave management processes. I focused on developing a user-friendly, feature-rich, and scalable platform that showcases essential HR functionalities, including leave applications, approval workflows, secure authentication, and role-based access for employees and administrators."
                             technologies={["React", "Axios", "Tailwind CSS", "Laravel", "Passport", "MySQL"]}
                             githubLink="https://github.com/Kavithma-Thushal/leave-management-system.git"
                             images={leaveManagementImages}
                             currentImageIndex={currentLeaveManagementImage}
                             onNextImage={() => setCurrentLeaveManagementImage((prev) => (prev + 1) % leaveManagementImages.length)}
                             onPreviousImage={() => setCurrentLeaveManagementImage((prev) => (prev - 1 + leaveManagementImages.length) % leaveManagementImages.length)}
                             onClickImage={() => openModal('leaveManagement')}/>

                <ProjectCard projectName="Laptop Hive - ECommerce Platform"
                             description="This project, Laptop Hive, is part of my coursework for the eCommerce platform development course at IJSE (Institute of Java and Software Engineering). I focused on building a user-friendly, feature-rich, and scalable online shopping platform that showcases key eCommerce functionalities, including product management, order tracking, and secure authentication."
                             technologies={["React", "Redux", "Express", "Node", "MongoDB"]}
                             githubLink="https://github.com/Kavithma-Thushal/Laptop-Hive-MERN.git"
                             images={laptopHiveImages}
                             currentImageIndex={currentLaptopHiveImage}
                             onNextImage={() => setCurrentLaptopHiveImage((prev) => (prev + 1) % laptopHiveImages.length)}
                             onPreviousImage={() => setCurrentLaptopHiveImage((prev) => (prev - 1 + laptopHiveImages.length) % laptopHiveImages.length)}
                             onClickImage={() => openModal('laptopHive')}/>

                <ProjectCard projectName="Google Keep Clone"
                             description="This project is part of the Advanced Mobile Application Development coursework at IJSE (Institute of Java and
          Software Engineering), where I focused on replicating the key functionalities and UI of Google Keep to create an intuitive, 
          feature-rich, cross-platform note-taking application."
                             technologies={["React Native", "Expo", "Firebase", "Express", "Node", "MongoDB"]}
                             githubLink="https://github.com/Kavithma-Thushal/Google-Keep-Clone-App"
                             images={googleKeepCloneImages}
                             currentImageIndex={currentGoogleKeepCloneImage}
                             onNextImage={() => setCurrentGoogleKeepCloneImage((prev) => (prev + 1) % googleKeepCloneImages.length)}
                             onPreviousImage={() => setCurrentGoogleKeepCloneImage((prev) => (prev - 1 + googleKeepCloneImages.length) % googleKeepCloneImages.length)}
                             onClickImage={() => openModal('googleKeepClone')}/>

                <ProjectCard projectName="Simple POS Laravel"
                             description="The Simple POS project is a robust and efficient system designed to support a Point of Sale (POS) application.
          Built with the Laravel framework, this project provides essential functionalities for managing customers, item details, and 
          order processing, with both frontend and backend components."
                             technologies={["HTML", "CSS", "JS", "AJAX", "JQuery", "Bootstrap", "Blades", "Laravel", "MySQL"]}
                             githubLink="https://github.com/Kavithma-Thushal/Simple-POS-Laravel"
                             images={laravelPOSImages}
                             currentImageIndex={currentLaravelPOSImage}
                             onNextImage={() => setCurrentLaravelPOSImage((prev) => (prev + 1) % laravelPOSImages.length)}
                             onPreviousImage={() => setCurrentLaravelPOSImage((prev) => (prev - 1 + laravelPOSImages.length) % laravelPOSImages.length)}
                             onClickImage={() => openModal('laravelPOS')}/>

                <ProjectCard projectName="Shoe Shop Management System"
                             description="Hello Shoes (PVT) LTD. offers a comprehensive Shoe Shop Management System with a modern frontend and a Spring Boot
                backend. It provides an intuitive interface for managing customers, employees, suppliers, inventory, and sales,
                supported by robust RESTful APIs for role-based authentication and efficient system management."
                             technologies={["HTML", "CSS", "JavaScript", "AJAX", "JQuery", "Bootstrap", "Spring Boot", "Spring Data JPA", "Spring Validation",
                                 "MySQL", "Spring Security", "JSON Web Token (JWT)"]}
                             githubLink="https://github.com/Kavithma-Thushal/Hello-Shoes-2nd-Sem-Final"
                             images={shoeShopImages}
                             currentImageIndex={currentShoeShopImage}
                             onNextImage={() => setCurrentShoeShopImage((prev) => (prev + 1) % shoeShopImages.length)}
                             onPreviousImage={() => setCurrentShoeShopImage((prev) => (prev - 1 + shoeShopImages.length) % shoeShopImages.length)}
                             onClickImage={() => openModal('shoeShop')}/>

                <ProjectCard projectName="Computer Shop Management System"
                             description="The Computer Shop Management System is a comprehensive standalone application built using JavaFX. It offers an
          intuitive interface for managing customers, employees, suppliers, inventory, and orders. The system also integrates Jasper 
          Reports for generating detailed reports, providing an efficient solution for managing various aspects of a computer shop's operations."
                             technologies={["Java", "JavaFX", "Maven", "MySQL", "Jasper Report"]}
                             githubLink="https://github.com/Kavithma-Thushal/Computershop-Management-System-1st-Sem-Final"
                             images={computerShopImages}
                             currentImageIndex={currentComputerShopImage}
                             onNextImage={() => setCurrentComputerShopImage((prev) => (prev + 1) % computerShopImages.length)}
                             onPreviousImage={() => setCurrentComputerShopImage((prev) => (prev - 1 + computerShopImages.length) % computerShopImages.length)}
                             onClickImage={() => openModal('computerShop')}/>

                <ProjectCard projectName="Hostel Management System"
                             description="The Hostel Management System, built with JavaFX, provides an intuitive interface for managing students, room allocations,
                reservations, and user logins. Students can secure rooms by paying key money, streamlining hostel operations and record-keeping."
                             technologies={["Java", "JavaFX", "Maven", "MySQL", "Hibernate"]}
                             githubLink="https://github.com/Kavithma-Thushal/Hostel-Management-System"
                             images={hostelManagementImages}
                             currentImageIndex={currentHostelManagementImage}
                             onNextImage={() => setCurrentHostelManagementImage((prev) => (prev + 1) % hostelManagementImages.length)}
                             onPreviousImage={() => setCurrentHostelManagementImage((prev) => (prev - 1 + hostelManagementImages.length) % hostelManagementImages.length)}
                             onClickImage={() => openModal('hostelManagement')}/>

                <ProjectCard projectName="Chat Application"
                             description="Introducing our innovative Multi-Threaded Chat Application, built in Java with a client-server architecture for real-time communication. Utilizing socket programming and multi-threading in Java, this application enables fast and secure messaging, file sharing, and multimedia exchange across both local and distributed networks."
                             technologies={["Java", "JavaFX", "Java Threads", "Java Sockets"]}
                             githubLink="https://github.com/Kavithma-Thushal/ChatApplication"
                             images={chatApplicationImages}
                             currentImageIndex={currentChatApplicationImage}
                             onNextImage={() => setCurrentChatApplicationImage((prev) => (prev + 1) % chatApplicationImages.length)}
                             onPreviousImage={() => setCurrentChatApplicationImage((prev) => (prev - 1 + chatApplicationImages.length) % chatApplicationImages.length)}
                             onClickImage={() => openModal('chatApplication')}/>

                <ProjectCard projectName="Shoe Shop Landing Page"
                             description="This Shoe Shop Landing Page houses the code for our sleek and user-friendly site, crafted to highlight our brand and product offerings. Designed with a modern and responsive layout, this page ensures a seamless user experience across all devices."
                             technologies={["HTML", "CSS", "JavaScript"]}
                             githubLink="https://github.com/Kavithma-Thushal/Shoe-Shop-Landing-Page"
                             images={shoeShopLandingImages}
                             currentImageIndex={currentShoeShopLandingImage}
                             onNextImage={() => setCurrentShoeShopLandingImage((prev) => (prev + 1) % shoeShopLandingImages.length)}
                             onPreviousImage={() => setCurrentShoeShopLandingImage((prev) => (prev - 1 + shoeShopLandingImages.length) % shoeShopLandingImages.length)}
                             onClickImage={() => openModal('shoeShopLanding')}/>

                <ProjectCard projectName="LinkedIn Clone - Mobile Application"
                             description="This is my First Mobile Application: LinkedIn Clone App, developed using React Native. I focused on replicating the core functionalities and UI of LinkedIn to ensure a user-friendly experience. An Android Emulator was used for testing and debugging, which was essential in fine-tuning the app's performance and usability."
                             technologies={["React Native", "Android Studio", "VS Code"]}
                             githubLink="https://github.com/Kavithma-Thushal/LinkedIn-Clone-App"
                             images={linkedInCloneImages}
                             currentImageIndex={currentLinkedinImage}
                             onNextImage={() => setCurrentLinkedinImage((prev) => (prev + 1) % linkedInCloneImages.length)}
                             onPreviousImage={() => setCurrentLinkedinImage((prev) => (prev - 1 + linkedInCloneImages.length) % linkedInCloneImages.length)}
                             onClickImage={() => openModal('linkedinClone')}/>

                <ProjectCard projectName="Simple MERN POS"
                             description="This is my First MERN Application .A straightforward Point of Sale system developed using the MERN stack. This application includes essential features like customer management, item management, and order placement, offering a comprehensive solution for basic sales operations."
                             technologies={["React.js", "Axios", "Node.js", "Express.js", "MongoDB"]}
                             githubLink="https://github.com/Kavithma-Thushal/MERN-POS"
                             images={mernPOSImages}
                             currentImageIndex={currentMernPOSImage}
                             onNextImage={() => setCurrentMernPOSImage((prev) => (prev + 1) % mernPOSImages.length)}
                             onPreviousImage={() => setCurrentMernPOSImage((prev) => (prev - 1 + mernPOSImages.length) % mernPOSImages.length)}
                             onClickImage={() => openModal('mernPOS')}/>

                <ProjectCard projectName="My Portfolio"
                             description="My Portfolio highlights my top projects and skills, showcasing my creativity, dedication, and growth. It reflects my approach to problem-solving and continuous learning, offering insights into my innovative solutions and commitment to excellence."
                             technologies={["HTML", "CSS", "JavaScript", "Figma"]}
                             githubLink="https://github.com/Kavithma-Thushal/MyPortfolio"
                             images={portfolioImages}
                             currentImageIndex={currentPortfolioImage}
                             onNextImage={() => setCurrentPortfolioImage((prev) => (prev + 1) % portfolioImages.length)}
                             onPreviousImage={() => setCurrentPortfolioImage((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length)}
                             onClickImage={() => openModal('portfolio')}/>

                <ProjectCard projectName="My Portfolio V2"
                             description="Dive into a showcase of my diverse skill set, meticulously crafted using React and Vite. This portfolio highlights my expertise in creating dynamic and responsive web applications with a modern touch."
                             technologies={["React", "Tailwind CSS"]}
                             githubLink="https://github.com/Kavithma-Thushal/My-Portfolio-V2"
                             images={portfolioV2Images}
                             currentImageIndex={currentPortfolioV2Image}
                             onNextImage={() => setCurrentPortfolioV2Image((prev) => (prev + 1) % portfolioV2Images.length)}
                             onPreviousImage={() => setCurrentPortfolioV2Image((prev) => (prev - 1 + portfolioV2Images.length) % portfolioV2Images.length)}
                             onClickImage={() => openModal('portfoliov2')}/>

                <ProjectCard projectName="Connect 4 Game"
                             description="I created this Connect 4 game as a way to deepen my understanding of Object-Oriented Programming (OOP) in Java. Through this project, I explored the principles of encapsulation, inheritance, polymorphism and abstraction, all while bringing a classic game to life."
                             technologies={["Java", "JavaFX", "OOP"]}
                             githubLink="https://github.com/Kavithma-Thushal/connect-four-assignment"
                             images={connect4Images}
                             currentImageIndex={currentConnect4Image}
                             onNextImage={() => setCurrentConnect4Image((prev) => (prev + 1) % connect4Images.length)}
                             onPreviousImage={() => setCurrentConnect4Image((prev) => (prev - 1 + connect4Images.length) % connect4Images.length)}
                             onClickImage={() => openModal('connect4')}/>

                <ProjectCard projectName="JavaEE POS"
                             description="This is my first simple POS system using Java EE, with a frontend for the user interface and a backend built with Java EE to manage the API."
                             technologies={["HTML", "CSS", "JS", "AJAX", "JavaEE", "MySQL"]}
                             githubLink="https://github.com/Kavithma-Thushal/JavaEE-POS"
                             images={javaeePOSImages}
                             currentImageIndex={currentJavaEEPOSImage}
                             onNextImage={() => setCurrentJavaEEPOSImage((prev) => (prev + 1) % javaeePOSImages.length)}
                             onPreviousImage={() => setCurrentJavaEEPOSImage((prev) => (prev - 1 + javaeePOSImages.length) % javaeePOSImages.length)}
                             onClickImage={() => openModal('javaeePOS')}/>

                <ProjectCard projectName="POS FrontEnd - React"
                             description="This is my first project using React, where I built a simple POS frontend designed to integrate with a backend powered by Java EE, Spring, and Spring Boot."
                             technologies={["React", "Axios", "VS Code"]}
                             githubLink="https://github.com/Kavithma-Thushal/POS-FrontEnd-React"
                             images={posFrontendImages}
                             currentImageIndex={currentPOSFrontendImage}
                             onNextImage={() => setCurrentPOSFrontendImage((prev) => (prev + 1) % posFrontendImages.length)}
                             onPreviousImage={() => setCurrentPOSFrontendImage((prev) => (prev - 1 + posFrontendImages.length) % posFrontendImages.length)}
                             onClickImage={() => openModal('posFrontend')}/>

                <ProjectCard projectName="POS BackEnd - Spring"
                             description="This is my first project where I've implemented a Spring based BackEnd for a POS system. It utilizes Spring and Spring Data JPA to handle business logic and data persistence, providing a robust and scalable solution for managing transactions and inventory."
                             technologies={["Spring", "Spring Data JPA", "MySQL"]}
                             githubLink="https://github.com/Kavithma-Thushal/POS-BackEnd-Spring"
                             images={posBackendSpringImages}
                             currentImageIndex={currentPOSBackendSpringImage}
                             onNextImage={() => setCurrentPOSBackendSpringImage((prev) => (prev + 1) % posBackendSpringImages.length)}
                             onPreviousImage={() => setCurrentPOSBackendSpringImage((prev) => (prev - 1 + posBackendSpringImages.length) % posBackendSpringImages.length)}
                             onClickImage={() => openModal('posBackendSpring')}/>

                <ProjectCard projectName="POS BackEnd - SpringBoot"
                             description="This is my first project where I've implemented a SpringBoot based BackEnd for a POS system. It utilizes Spring Boot and Spring Data JPA to handle business logic and data persistence, providing a robust and scalable solution for managing transactions and inventory."
                             technologies={["SpringBoot", "Spring Data JPA", "MySQL"]}
                             githubLink="https://github.com/Kavithma-Thushal/POS-BackEnd-SpringBoot"
                             images={posBackendSpringBootImages}
                             currentImageIndex={currentPOSBackendSpringBootImage}
                             onNextImage={() => setCurrentPOSBackendSpringBootImage((prev) => (prev + 1) % posBackendSpringBootImages.length)}
                             onPreviousImage={() => setCurrentPOSBackendSpringBootImage((prev) => (prev - 1 + posBackendSpringBootImages.length) % posBackendSpringBootImages.length)}
                             onClickImage={() => openModal('posBackendSpringBoot')}/>

                <ProjectCard projectName="Student Management System - CLI"
                             description="This is a Command Line Interface (CLI) application designed to manage student information efficiently. This is the Course-Work of Programming Fundermentals."
                             technologies={["Java", "Fundermentals"]}
                             githubLink="https://github.com/Kavithma-Thushal/Student-Management-System-CLI"
                             images={studentCLIImages}
                             currentImageIndex={currentStudentCLIImage}
                             onNextImage={() => setCurrentStudentCLIImage((prev) => (prev + 1) % studentCLIImages.length)}
                             onPreviousImage={() => setCurrentStudentCLIImage((prev) => (prev - 1 + studentCLIImages.length) % studentCLIImages.length)}
                             onClickImage={() => openModal('studentCLI')}/>

            </div>

            <PopUpImage isOpen={isModalOpen} onClose={closeModal}
                        imageSrc={
                            currentProject === 'simpleToDo' ? simpleToDoImages[currentSimpleToDoImage] :
                                currentProject === 'leaveManagement' ? leaveManagementImages[currentLeaveManagementImage] :
                                    currentProject === 'laptopHive' ? laptopHiveImages[currentLaptopHiveImage] :
                                        currentProject === 'googleKeepClone' ? googleKeepCloneImages[currentGoogleKeepCloneImage] :
                                            currentProject === 'laravelPOS' ? laravelPOSImages[currentLaravelPOSImage] :
                                                currentProject === 'shoeShop' ? shoeShopImages[currentShoeShopImage] :
                                                    currentProject === 'computerShop' ? computerShopImages[currentComputerShopImage] :
                                                        currentProject === 'hostelManagement' ? hostelManagementImages[currentHostelManagementImage] :
                                                            currentProject === 'chatApplication' ? chatApplicationImages[currentChatApplicationImage] :
                                                                currentProject === 'shoeShopLanding' ? shoeShopLandingImages[currentShoeShopLandingImage] :
                                                                    currentProject === 'portfolio' ? portfolioImages[currentPortfolioImage] :
                                                                        currentProject === 'linkedinClone' ? linkedInCloneImages[currentLinkedinImage] :
                                                                            currentProject === 'mernPOS' ? mernPOSImages[currentMernPOSImage] :
                                                                                currentProject === 'connect4' ? connect4Images[currentConnect4Image] :
                                                                                    currentProject === 'portfoliov2' ? portfolioV2Images[currentPortfolioV2Image] :
                                                                                        currentProject === 'studentCLI' ? studentCLIImages[currentStudentCLIImage] :
                                                                                            currentProject === 'posFrontend' ? posFrontendImages[currentPOSFrontendImage] :
                                                                                                currentProject === 'posBackendSpring' ? posBackendSpringImages[currentPOSBackendSpringImage] :
                                                                                                    currentProject === 'posBackendSpringBoot' ? posBackendSpringBootImages[currentPOSBackendSpringBootImage] :
                                                                                                        currentProject === 'javaeePOS' ? javaeePOSImages[currentJavaEEPOSImage] : ''}

                        onNext={
                            currentProject === 'simpleToDo' ? () => setCurrentSimpleToDoImage((prev) => (prev + 1) % simpleToDoImages.length) :
                                currentProject === 'leaveManagement' ? () => setCurrentLeaveManagementImage((prev) => (prev + 1) % leaveManagementImages.length) :
                                    currentProject === 'laptopHive' ? () => setCurrentLaptopHiveImage((prev) => (prev + 1) % laptopHiveImages.length) :
                                        currentProject === 'googleKeepClone' ? () => setCurrentGoogleKeepCloneImage((prev) => (prev + 1) % googleKeepCloneImages.length) :
                                            currentProject === 'laravelPOS' ? () => setCurrentLaravelPOSImage((prev) => (prev + 1) % laravelPOSImages.length) :
                                                currentProject === 'shoeShop' ? () => setCurrentShoeShopImage((prev) => (prev + 1) % shoeShopImages.length) :
                                                    currentProject === 'computerShop' ? () => setCurrentComputerShopImage((prev) => (prev + 1) % computerShopImages.length) :
                                                        currentProject === 'hostelManagement' ? () => setCurrentHostelManagementImage((prev) => (prev + 1) % hostelManagementImages.length) :
                                                            currentProject === 'chatApplication' ? () => setCurrentChatApplicationImage((prev) => (prev + 1) % chatApplicationImages.length) :
                                                                currentProject === 'shoeShopLanding' ? () => setCurrentShoeShopLandingImage((prev) => (prev + 1) % shoeShopLandingImages.length) :
                                                                    currentProject === 'portfolio' ? () => setCurrentPortfolioImage((prev) => (prev + 1) % portfolioImages.length) :
                                                                        currentProject === 'linkedinClone' ? () => setCurrentLinkedinImage((prev) => (prev + 1) % linkedInCloneImages.length) :
                                                                            currentProject === 'mernPOS' ? () => setCurrentMernPOSImage((prev) => (prev + 1) % mernPOSImages.length) :
                                                                                currentProject === 'connect4' ? () => setCurrentConnect4Image((prev) => (prev + 1) % connect4Images.length) :
                                                                                    currentProject === 'portfoliov2' ? () => setCurrentPortfolioV2Image((prev) => (prev + 1) % portfolioV2Images.length) :
                                                                                        currentProject === 'studentCLI' ? () => setCurrentStudentCLIImage((prev) => (prev + 1) % studentCLIImages.length) :
                                                                                            currentProject === 'posFrontend' ? () => setCurrentPOSFrontendImage((prev) => (prev + 1) % posFrontendImages.length) :
                                                                                                currentProject === 'posBackendSpring' ? () => setCurrentPOSBackendSpringImage((prev) => (prev + 1) % posBackendSpringImages.length) :
                                                                                                    currentProject === 'posBackendSpringBoot' ? () => setCurrentPOSBackendSpringBootImage((prev) => (prev + 1) % posBackendSpringBootImages.length) :
                                                                                                        currentProject === 'javaeePOS' ? () => setCurrentJavaEEPOSImage((prev) => (prev + 1) % javaeePOSImages.length) : () => {
                                                                                                        }}

                        onPrevious={
                            currentProject === 'simpleToDo' ? () => setCurrentSimpleToDoImage((prev) => (prev - 1 + simpleToDoImages.length) % simpleToDoImages.length) :
                                currentProject === 'leaveManagement' ? () => setCurrentLeaveManagementImage((prev) => (prev - 1 + leaveManagementImages.length) % leaveManagementImages.length) :
                                    currentProject === 'laptopHive' ? () => setCurrentLaptopHiveImage((prev) => (prev - 1 + laptopHiveImages.length) % laptopHiveImages.length) :
                                        currentProject === 'googleKeepClone' ? () => setCurrentGoogleKeepCloneImage((prev) => (prev - 1 + googleKeepCloneImages.length) % googleKeepCloneImages.length) :
                                            currentProject === 'laravelPOS' ? () => setCurrentLaravelPOSImage((prev) => (prev - 1 + laravelPOSImages.length) % laravelPOSImages.length) :
                                                currentProject === 'shoeShop' ? () => setCurrentShoeShopImage((prev) => (prev - 1 + shoeShopImages.length) % shoeShopImages.length) :
                                                    currentProject === 'computerShop' ? () => setCurrentComputerShopImage((prev) => (prev - 1 + computerShopImages.length) % computerShopImages.length) :
                                                        currentProject === 'hostelManagement' ? () => setCurrentHostelManagementImage((prev) => (prev - 1 + hostelManagementImages.length) % hostelManagementImages.length) :
                                                            currentProject === 'chatApplication' ? () => setCurrentChatApplicationImage((prev) => (prev - 1 + chatApplicationImages.length) % chatApplicationImages.length) :
                                                                currentProject === 'shoeShopLanding' ? () => setCurrentShoeShopLandingImage((prev) => (prev - 1 + shoeShopLandingImages.length) % shoeShopLandingImages.length) :
                                                                    currentProject === 'portfolio' ? () => setCurrentPortfolioImage((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length) :
                                                                        currentProject === 'linkedinClone' ? () => setCurrentLinkedinImage((prev) => (prev - 1 + linkedInCloneImages.length) % linkedInCloneImages.length) :
                                                                            currentProject === 'mernPOS' ? () => setCurrentMernPOSImage((prev) => (prev - 1 + mernPOSImages.length) % mernPOSImages.length) :
                                                                                currentProject === 'connect4' ? () => setCurrentConnect4Image((prev) => (prev - 1 + connect4Images.length) % connect4Images.length) :
                                                                                    currentProject === 'portfoliov2' ? () => setCurrentPortfolioV2Image((prev) => (prev - 1 + portfolioV2Images.length) % portfolioV2Images.length) :
                                                                                        currentProject === 'studentCLI' ? () => setCurrentStudentCLIImage((prev) => (prev - 1 + studentCLIImages.length) % studentCLIImages.length) :
                                                                                            currentProject === 'posFrontend' ? () => setCurrentPOSFrontendImage((prev) => (prev - 1 + posFrontendImages.length) % posFrontendImages.length) :
                                                                                                currentProject === 'posBackendSpring' ? () => setCurrentPOSBackendSpringImage((prev) => (prev - 1 + posBackendSpringImages.length) % posBackendSpringImages.length) :
                                                                                                    currentProject === 'posBackendSpringBoot' ? () => setCurrentPOSBackendSpringBootImage((prev) => (prev - 1 + posBackendSpringBootImages.length) % posBackendSpringBootImages.length) :
                                                                                                        currentProject === 'javaeePOS' ? () => setCurrentJavaEEPOSImage((prev) => (prev - 1 + javaeePOSImages.length) % javaeePOSImages.length) : () => {
                                                                                                        }}/></div>
    );
}