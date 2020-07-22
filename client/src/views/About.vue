<template>
  <div class="about">
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">About MEGA</h1>        
        </div>
      </div>
    </div>
    <div class="container">
      <p class="org-description is-size-4">During the 2020 COVID-19 Pandemic, dozens of people from around the world 
      participated in online tournaments of Monsterpocalypse. From this, questions arose as to the strength of monsters 
      after accounting for player skill and so the tournament data was leveraged to calculate Elo scores (originally for chess)
      to rank players. Some of us wanted to create a system to preserve and extend these calculation and allow players to track
      their performance via a number.</p>
      <p class="org-description is-size-4">Elo is a zero-sum calculation where two players exchange points after each game 
      based on the difference between their starting scores and how much monster health the winner has remaining. The winner 
      will always see a score increase and the loser will always see a score decrease and the amount of change is the same for 
      both players.</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .org-description {
    margin-top: 50px;
  }
</style>