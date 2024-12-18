import { Consultation } from "./pages/AppointmentConsultation/Consultation"
import { Contacts } from "./pages/ContactsPage/Contacts"
import { MyInfo } from "./pages/MyInfoPage/MyInfo"
import { Services } from "./pages/ServicesPage/Services"
import { CONSULTATION_ROUTE, CONTACTS_ROUTE, MAIN_ROUTE, MYINFO_ROUTE, SERVICES_ROUTE } from "./utils/constants"



export const publicRouters = [
    {
        path:CONTACTS_ROUTE,
        Component:Contacts
    },
    {
        path:SERVICES_ROUTE,
        Component:Services
    },
    {
        path:MYINFO_ROUTE,
        Component:MyInfo
    },
    {
        path:CONSULTATION_ROUTE,
        Component:Consultation
    },

]
