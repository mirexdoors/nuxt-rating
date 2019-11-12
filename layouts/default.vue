<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      {{ title }}
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
    <v-footer
      app
    >
      <span>&copy; 2019 </span> <a :href="`mailto:${email}`">{{ email }}</a>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'sports_tennis',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      title: 'Рейтинг федерации сквоша России',
      email: 'info@rating.sibsquash.ru'
    }
  }
}
</script>
