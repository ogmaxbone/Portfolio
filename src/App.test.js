import logo from './logo.svg';
import './App.css';
import background from '/Users/maxmontes/Desktop/project no pat/my-app/src/bg.png';

function App() {
  return (
    <div  className="App">
      <header className="App-header">
      <div  className="container">
      <div className="content">
        <h1 className='header1'>About</h1>
      <p className='bio' style={{ whiteSpace: 'pre-wrap' }}>
        I am a 21 year old <span style={{color: 'white'}}>software engineer</span> based in <span style={{color: 'white'}}>Texas</span>.📍 
        Currently, I am pursuing a <span style={{color: 'white'}}>Bachelor of Science</span> degree in <span style={{color: 'white'}}>Computer Science</span> at Texas Tech Universitys, where I am immersing myself in the vast realm of software<span style={{color: 'white'}}> development</span>.
      </p>
      <div className='socials'>
        <div className="social-icon">
        <svg onClick={() => {
  window.open("https://github.com/ogmaxbone", "_blank");
}} style={{cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
</svg>

<svg onClick={() => {
  window.open("https://www.linkedin.com/in/max-montes-bb76a1279/", "_blank");
}} style={{cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
  <rect x="2" y="9" width="4" height="12"></rect>
  <circle cx="4" cy="4" r="2"></circle>
</svg>

<svg onClick={() => {
  window.open("mailto:maxmontes73@gmail.com", "_blank");
}} style={{cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
  <polyline points="22,6 12,13 2,6"></polyline>
</svg>

</div>
      </div>
      
      </div>
    </div>
      </header>
    </div>
  );
}

export default App;
