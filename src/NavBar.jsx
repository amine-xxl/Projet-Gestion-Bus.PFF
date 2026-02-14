 import logo from"./assets/Logo (6).png"
 import "./NavBar.css";
 export default function Navbar(){
    return(

    
 <div>
  

    <nav className="navbar navbar-expand-lg  bg-white px-4"></nav>
      
      <a className="navbar-brand fw-bold" href="#">
     
        
      </a>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> <img src={logo}
        alt="logo"
        className="logo"
        width={100}
        height={100}
        
        >
        </img>
        </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Ticket</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Conatct</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">News</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" >
            About
          </a>
          </li>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Bus</a></li>
            <li><a class="dropdown-item" href="#">Tram</a></li>
            <li><a class="dropdown-item" href="#">Transport Scolaire</a></li>
          </ul>
      </ul>
    </div>
  </div>
</nav>
</div>
    
)
};