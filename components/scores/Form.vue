<template>
  <div>
    <div class="score-spacer flex-row d-flex align-center">
      <div class="item">
        <strong>PONTUAÇÃO</strong>
      </div>
      <v-select
        v-model="score"
        class="item"
        :items="scores"
        height="30"
        width="10px"
        item-text="text"
        item-value="type"
      />
      <div class="item">
        <strong>MÊS</strong>
      </div>
      <v-select
        v-model="dispute"
        class="item"
        :items="disputes"
        item-text="name"
        item-value="id"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { DISPUTES } from "@/graphql/queries/disputes/disputes"
import SCORES from "@/graphql/queries/scores/monthScores"

export default {
  data () {
    return {
      loading: false,
      query: [],
      scores: [
        { type: "month", text: "disputa mensal", query: SCORES },
        { type: "league", text: "copa da liga", query: SCORES },
        { type: "currency", text: "patrimônio", query: SCORES },
        { type: "first_turn", text: "primeiro turno", query: SCORES },
        { type: "second_turn", text: "segundo turno", query: SCORES },
        { type: "championship", text: "campeonato", query: SCORES }
      ]
    }
  },
  computed: {
    ...mapGetters("scores", ["selected"]),
    score: {
      get () {
        return this.selected.score
      },
      set (value) {
        this.$store.commit("scores/SET_SCORE", value)
      }
    },
    dispute: {
      get () {
        return this.selected.dispute.toString()
      },
      set (value) {
        this.$store.commit("scores/SET_DISPUTE", value)
      }
    }
  },
  mounted () {
    this.$store.dispatch("scores/setSelected", {
      dispute: this.disputes[0].id,
      score: this.scores[0].type
    })
    this.getScores()
  },
  methods: {
    selectQuery: () => this.scores.find(score => this.selected === score.type),
    async getScores () {
      this.loading = true
      try {
        this.query = await this.$apollo.query({
          query: SCORES,
          variables: { disputeId: this.selected.dispute }
        })
      } catch (err) {
        this.$store.dispatch("util/sendMessage", ["error", `Erro ao buscar resultados ${err}`])
      } finally {
        this.loading = false
      }
    }
  },
  apollo: {
    disputes: DISPUTES
  }
}
</script>

<style scoped>
  .item {
    width: 20%;
    text-align: center;
  }
  .score-spacer{
    padding: 20px;
    background-color: white !important;
    border: 1px solid #707070;
    height: 80px;
  }
</style>
