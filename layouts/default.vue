<template>
  <div id="app">
    <header>
      <nav>
        <nuxt-link class="nav-link" to="/">Home</nuxt-link>
        <nuxt-link class="nav-link" to="/game">Game</nuxt-link>
        <nuxt-link class="nav-link" to="/rules">Rules</nuxt-link>
      </nav>
    </header>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<style>
/* Einfaches Styling für die App */
#app {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background: #4caf50;
  color: white;
  padding: 1rem;
  text-align: center;
}

.nav-link {
  color: white;
  text-decoration: none;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.nav-link:active,
.nav-link:visited {
  color: white;
}

nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

main {
  padding: 2rem;
}

footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
