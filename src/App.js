import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Header from './Header.js'
import Project from './Project.js'
import Footer from './Footer.js'

function App() {

  let projects = [
    {
      name: "Project 1",
      description: "project 1",
      url: "project1.com",
      path: 'project1'
    },
    {
      name: "Project 2",
      description: "project 2",
      url: "project2.com",
      path: 'project2'
    },
    {
      name: "Project 3",
      description: "project 3",
      url: "project3.com",
      path: 'project3'
    }
  ]

  return (
    <Router>
      <Switch>
        <Route path="/homepage">
          <Header title="My Portfolio" />
          {projects.map((project, i) => <Project project={project} displayFull={true} />)}
          <Footer />
        </Route>
        {projects.map((project, i) => {
          <Route path={`/${project.path}`}>
            <Header title={project.name} />
            <Project project={project} displayFull={true} />
            <Footer />
          </Route>
        })}
      </Switch>
    </Router>
  )
}
export default App
