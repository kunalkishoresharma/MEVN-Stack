<template>
<header>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <router-link class="navbar-brand" to="/"><img alt="Vue logo" src="../assets/logo.png"> Task Manager</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/" exact>
          Home
        </router-link>
      </li>
      <li class="nav-item">
           <router-link class="nav-link" to="/tasks" exact>Tasks</router-link>
      </li>
      <li class="nav-item">
          <router-link class="nav-link" to="/register" exact>Register</router-link>
      </li>
      <li class="nav-item">
           <router-link class="nav-link" to="/login" exact>Login</router-link>
      </li>
      <li class="nav-item">
           <a class="nav-link" href="#">Logout</a>
      </li>
       <li class="nav-item">
          <a class="nav-link" href="#">
            {{this.$store.state.username ? this.$store.state.username: 'User'}}

          </a>
      </li> 
    </ul>
  </div>
</nav>
</header>
</template>