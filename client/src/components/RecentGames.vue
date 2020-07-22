<template>
  <div class="games container">
    <h2 class="subtitle is-3">
    Recent Reported Games
    </h2>
    <div class="columns is-multiline">
      <div v-for="game in games" :game="game" :key="game.id" class="column is-one-quarter">
        <router-link :to="'/game/' + game.id">
          <GameCard :game="game" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import GameCard from '@/components/GameCard';
  export default {
    name: 'RecentGames',
    components : {
      GameCard
    },
    data () {
      return {
        game: {},
        games: [
          {
            id: 1,
            winner: 'pofigster',
            loser: 'relocked',
            winnerMonsters: ['Hammerklak', 'Globbicus'],
            loserMonsters: ['Incinerus', 'Krakenoctus'],
            location: 'TTS',
            date: '2020-07-09'
          },
          {
            id: 2,
            winner: 'kingCorgi',
            loser: 'pofigster',
            winnerMonsters: ['Hammerklak', 'Globbicus'],
            loserMonsters: ['Incinerus', 'Krakenoctus'],
            location: 'TTS',
            date: '2020-07-10'
          },
          {
            id: 3,
            winner: 'pofigster',
            loser: 'Suthinbelle',
            winnerMonsters: ['Hammerklak', 'Globbicus'],
            loserMonsters: ['Incinerus', 'Krakenoctus'],
            location: 'TTS',
            date: '2020-07-11'
          },
          {
            id: 4,
            winner: 'relocked',
            loser: 'kingCorgi',
            winnerMonsters: ['Hammerklak', 'Globbicus'],
            loserMonsters: ['Incinerus', 'Krakenoctus'],
            location: 'TTS',
            date: '2020-07-12'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .events {
    margin-top: 100px;
    text-align: center;
  }
</style>