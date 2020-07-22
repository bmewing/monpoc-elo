<template>
  <div class="event-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ game.winner }} vs {{ game.loser }}
          </h1>
          <h2 class="subtitle ">
            {{ game.date }}
          </h2>
        </div>
      </div>
    </section>
    <section class="event-content">
      <div class="container">
        <p class="is-size-4 description">Winner: {{ game.winner }}</p>
        <p class="is-size-4">Location: {{ game.location}}</p>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'GameSingle',
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
    },
    created() {
      const ID = Number(this.$route.params.id);
      let game = this.games.find(game => game.id === ID);
      this.game = game;
    }
  }
</script>

<style lang="scss" scoped>
  .event-single {
    margin-top: 30px;
  }
  .hero {
    margin-bottom: 70px;
  }
  .event-images {
    margin-top: 50px;
  }
  .description {
    margin-bottom: 30px;
  }
</style>