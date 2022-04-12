import { Route, Routes } from "react-router-dom"
import KanbanPage from "../pages/KanbanPage/KanbanPage"
import MemePage from "../pages/MemePage/MemePage"
import IndexPage from "../pages/IndexPage/IndexPage"
import BreweriesPage from "../pages/BreweriesPage/BreweriesPage"


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/kanban" element={<KanbanPage />} />
            <Route path="/meme" element={<MemePage />} />
            <Route path="/breweries" element={<BreweriesPage />} />
        </Routes>
    )
}

export default AppRoutes 