<template>
  <div class="game-card">
    <div class="card">
      <div class="card-content">
        <h2 class="is-size-4 has-text-weight-bold">{{ game.winner }} vs {{ game.loser }}</h2>
        <small class="game-date">{{ game.date }}</small>
        <span>{{ game.location }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'game'
    ]
  }
</script>

<style lang="scss" scoped>
  .card {
    background-image: url('https://monsterpocalypse.com/wp-content/themes/monsterpocalypse/assets/img/Protectors.png');
    height: 200px;
    background-position: center;
    background-size: cover;
    text-align: center;
  }
  .card-content {
    padding-top: 50px;
    position: absolute;
    color: #FFF;
    background-color: rgba(0, 0, 0, 0.35);
    top: 0;
    padding: 10px;
    height: 200px;
    width: 100%;
    span {
      font-size: 18px;
      text-align: center;
      width: 100%;
      position: absolute;
      bottom: 10px;
      right: 0;
    }
    h2 {
      margin-top: 10px;
    }
  }
  .game-date {
    background-color: #151515;
    color: #FFF;
    font-size: .75em;
    padding: 2px 10px;
    position: absolute;
    top: 0;
    right: 0;
  }
</style>