import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import ProjectDetails from "./pages/ProjectDetails"

function App() {
    
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="projects/:id" element={<ProjectDetails />} />
            </Route>
        </Routes>
    );
}

export default App;
