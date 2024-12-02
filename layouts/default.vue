<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/game">Game</nuxt-link></li>
          <li><nuxt-link to="/rules">Rules</nuxt-link></li>
        </ul>
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
