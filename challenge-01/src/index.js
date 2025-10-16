import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOlRoTDI1JbOQHkHR-_fWXQYG5t1TmIzzlVw&s"
      alt="avatar"
    />
  );
}

function Intro() {
  return (
    <div style={{ marginBottom: '8px' }}>
      <h1>Jiaxin Weng (nono)</h1>
      <p>
        Looking for front-end developer work, graduated at UNSW MIT with Excellence. I like playing
        video game, working out and swimming.
      </p>
    </div>
  );
}

function Skill(props) {
  return (
    <span className="skill" style={{ backgroundColor: props.bgc }}>
      {props.skillName}
    </span>
  );
}

function SkillList() {
  return (
    <div className="skil-list">
      <Skill skillName="HTML+CSS" bgc="blue" />
      <Skill skillName="JavaScript" bgc="yellow" />
      <Skill skillName="Web Design" bgc="green" />
      <Skill skillName="Git and Github" bgc="orange" />
      <Skill skillName="React" bgc="skyblue" />
      <Skill skillName="Svelte" bgc="red" />
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
