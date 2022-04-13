import { Route, Routes } from "react-router-dom"
import KanbanPage from "../pages/KanbanPage/KanbanPage"
import MemePage from "../pages/MemePage/MemePage"
import IndexPage from "../pages/IndexPage/IndexPage"
import BreweriesPage from "../pages/BreweriesPage/BreweriesPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignInPage from "../pages/SignInPage/SignInPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/kanban" element={<KanbanPage />} />
            <Route path="/meme" element={<MemePage />} />
            <Route path="/breweries" element={<BreweriesPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRoutes 