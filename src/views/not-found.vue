<template>
  <div class="container">
    <h1>404</h1>
    <p>Oops! The page you are looking for does not exist.</p>
    <a class="home-link" href="/">Go to Homepage</a>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
body {
  background-color: #f0f0f0;
  color: #333;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  text-align: center;
}

h1 {
  font-size: 10em;
  margin: 0;
  color: #e74c3c;
}

p {
  font-size: 1.5em;
}

.home-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #3498db;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.home-link:hover {
  background-color: #2980b9;
}

</style>
