<template>
    <div>{{currentPlayer}}</div>
</template>
<script>
  export default {
    data: () => ({}),
    computed: {
      currentPlayer() {
        const playerPath = this.$route.params.player;
        const allPlayers = this.$store.getters['players/get'];
        let currentPlayer = allPlayers.men.filter((player) => {
            return playerPath == translit(player.player_name);
        });
       if (currentPlayer.length < 1) {
         currentPlayer = allPlayers.women.filter((player) => {
           return playerPath == translit(player.player_name);
         });
       }
       return currentPlayer;
      },
    },
  }

  const translit = (name) => {
    const ru = {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
      'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i',
      'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
      'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
      'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh',
      'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya'
    }, n_name = [];

    name = name.replace(/[ъь]+/g, '').replace(/й/g, 'i');
    name = name.replace(' ', '_').replace(/й/g, 'i');

    for (let i = 0; i < name.length; ++i) {
      n_name.push(
        ru[name[i]]
        || ru[name[i].toLowerCase()] == undefined && name[i]
        || ru[name[i].toLowerCase()].replace(/^(.)/, function (match) {
          return match
        })
      );
    }
    return n_name.join('');
  }
</script>