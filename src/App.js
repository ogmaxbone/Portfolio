
import './App.css';
function App() {
  return (
    <div  className="App">
      <div className="background-image"></div>
      <header className="App-header">
      <div  className="container">
      <div className="content">
        <h1 className='header1'>Hey, I'm Max 👋</h1>
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
      <div className='projects'>
        <h2 className='header2'>Projects</h2>
          <div className='montesBot'>
            <h3 onClick={() => {
      window.open("https://github.com/ogmaxbone/Montes", "_blank");
    }}><span className='montesHeader' style={{cursor:"pointer"}}>Montes Bot 🤖</span></h3>
            <p className='montesDescript'>I developed a project that serves as a <span style={{color: 'white'}}> boilerplate</span> code for a sneaker bot. This project was built using <span style={{color: 'white'}}> ElectronJS</span>, <span style={{color: 'white'}}> JavaScript</span>, <span style={{color: 'white'}}> HTML</span>, and <span style={{color: 'white'}}> CSS</span>. It provides a <span style={{color: 'white'}}> graphical user interface</span> (GUI) that allows users to easily customize and <span style={{color: 'white'}}> integrate</span> their own e-commerce website modules. By leveraging this boilerplate code, users can streamline the process of creating their <span style={{color: 'white'}}> e-commerce</span> bot with tailored <span style={{color: 'white'}}> modules</span> for different websites.</p>
          </div>
          <div className='arcane'>
            <h3 ><span className="arcaneHeader" style={{cursor:"pointer"}}>Arcane 👾</span></h3>
            <p className='arcaneDescript'>Arcane was a <span style={{ color: 'white' }}>Web3 automation bot</span> I developed as a hobby when <span style={{ color: 'white' }}>NFTs</span> sparked my interest. This <span style={{ color: 'white' }}>CLI-based project</span>, although currently deprecated, encompassed various functionalities in the <span style={{ color: 'white' }}>blockchain realm</span>. It included features such as a <span style={{ color: 'white' }}>Solana wallet generator</span>, <span style={{ color: 'white' }}>Ethereum wallet generator</span>, and a <span style={{ color: 'white' }}>Magic Eden Listing sniper</span>. The <span style={{ color: 'white' }}>Magic Eden Listing sniper module</span> enabled users to automate the process of swiftly acquiring desired non-fungible tokens (<span style={{ color: 'white' }}>NFTs</span>) from the Magic Eden marketplace. Additionally, the project incorporated a <span style={{ color: 'white' }}>Magic Eden launchpad module</span>, streamlining the NFT acquisition process. By leveraging this bot, users could automate key actions and increase efficiency in the <span style={{ color: 'white' }}>Web3 ecosystem</span>.</p>
          </div>
          <div className="license" >
            
              <h4><span className="licenseHeader" style={{cursor:"pointer"}}>Discord License System 🎟</span></h4>
              <p className='discord'>I developed a <span style={{ color: 'white' }}>sophisticated Discord License System</span> for seamless management of <span style={{ color: 'white' }}>licenses</span> and user authentication within Discord. This system allows software developers to generate <span style={{ color: 'white' }}>unique license keys</span>, bind licenses to specific <span style={{ color: 'white' }}>Discord users</span>, and provide <span style={{ color: 'white' }}>license status information</span>. Users can easily <span style={{ color: 'white' }}>reset their licenses</span> if needed. The system integrates with a <span style={{ color: 'white' }}>remote server</span>, ensuring secure license verification and <span style={{ color: 'white' }}>tracking</span>. The Discord License System provides an <span style={{ color: 'white' }}>efficient solution</span> for software developers to protect their products while offering a user-friendly experience through <span style={{ color: 'white' }}>Discord commands</span>.</p>
          </div>
      </div>
      
      </div>
    </div>
      </header>
    </div>
  );
}

export default App;
