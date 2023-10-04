function App() {
  return (
    <div className="hero min-h-screen relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1628771065518-0d82f1938462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)' }}>
      <div className="hero-overlay bg-opacity-60"></div>

      {/* Navigation bar */}
      <div className="navbar bg-base-100 absolute inset-x-0 top-0">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a className="text-xl text-white font-bold" href="#">HealthCare</a>
            <ul className="menu menu-horizontal">
              <li><a className="text-white">Home</a></li>
              <li><a className="text-white">About</a></li>
              <li><a className="text-white">Services</a></li>
              <li><a className="text-white">Appointment</a></li>
              <li><a className="text-white">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-white font-bold">Hello there</h1>
          <p className="mb-5 text-white">We provide best healthcare. Let us help you lead a healthy life. Join us on this incredible journey.</p>
          <button className="btn btn-accent">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default App;
