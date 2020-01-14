<template>
    <nav class="nav">
        <a class="nav__item nav__item--active" href="/men/">Мужчины</a>
        <a class="nav__item" href="/women/">Женщины</a>
    </nav>
</template>
<script>
  export default {
    name: 'navigation',
    data: () => ({})
  }
</script>
<style scoped>
    .nav {
        display: flex;
        width: 100%;
    }
    .nav__item {
        display: block;
        width: 50%;
        color: #393939;
        padding: 1rem 2rem;
        font-size: 1.375rem;
        text-align: center;
        text-decoration: none;
    }
    .nav__item--active {
        border-bottom: .375rem solid #cc2d32;;
    }
</style>