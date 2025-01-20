import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import SideBar from "./components/SideBar";
import { useState } from 'react'

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(p => p.id !== prevState.selectedProjectId)
      }
    })
  }
  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }
  function handleStartAddProject() {
    setProjectsState(prevState =>{
      return {
        ...prevState,
        selectedProjectId: null,

      }
    })
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  const selectedProject= projectsState.projects.find(project => project.id === projectsState.selectedProjectId)
  let content = <SelectedProject onDelete={handleDeleteProject} project={selectedProject}/>;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject}/>
  } else if (projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onSelectProject={handleSelectProject} projects={projectsState.projects} onStartAddProject={handleStartAddProject}/>
      {content}
      
    </main>
  );
}

export default App;
