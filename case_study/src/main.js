import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

document.querySelector('#app').innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">ESStream</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#games">Games</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#streams">Streams</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <main class="container my-5">
    <section id="home" class="mb-5">
      <h2 class="display-4">Welcome to Esports Streaming</h2>
      <p class="lead">Watch the best esports matches for free. Explore various games and live streams.</p>
    </section>
    <section id="games" class="mb-5">
      <h2 class="display-5 mb-4">Featured Games</h2>
      <div class="row">
        <div class="col-md-3 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">League of Legends</h5>
              <p class="card-text">Team-based strategy game.</p>
              <button class="btn btn-primary">View Streams</button>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">CS:GO</h5>
              <p class="card-text">Competitive first-person shooter.</p>
              <button class="btn btn-primary">View Streams</button>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Dota 2</h5>
              <p class="card-text">Multiplayer online battle arena.</p>
              <button class="btn btn-primary">View Streams</button>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Overwatch</h5>
              <p class="card-text">Hero-based shooter.</p>
              <button class="btn btn-primary">View Streams</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="streams" class="mb-5">
      <h2 class="display-5 mb-4">Live Streams</h2>
      <p class="lead">Check out live streams on popular platforms like Twitch and YouTube.</p>
      <ul class="list-group">
        <li class="list-group-item"><a href="https://twitch.tv" target="_blank" class="text-decoration-none">Twitch</a></li>
        <li class="list-group-item"><a href="https://youtube.com" target="_blank" class="text-decoration-none">YouTube Gaming</a></li>
      </ul>
    </section>
  </main>
  <footer class="bg-dark text-center text-light py-3 mt-5">
    <p class="mb-0">&copy; 2025 Esports Streaming Hub. All rights reserved.</p>
  </footer>
`

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Streaming feature coming soon!');
    });
  });
});
