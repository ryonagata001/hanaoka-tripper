<template>
    <div id="app">
        <router-link :to="{name: 'news'}">NEWS MEDIA</router-link>
        <br />
        <router-link :to="{name: 'works'}">WORKS</router-link>
        <br />
        <router-link :to="{name: 'people'}">PEOPLE</router-link>
        <br />
        <router-link :to="{name: 'about'}">ABOUT US</router-link>
        <br />
        <router-link :to="{name: 'top'}">TOP</router-link>
        <router-view />
    </div>
</template>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
