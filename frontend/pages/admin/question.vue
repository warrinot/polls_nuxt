<template>
  <div>
    <h1 class="title">Questions</h1>
    <form-question v-model="question" @save="save" @reset="reset" />
    <hr />
    <list-questions
      v-model="questions"
      @remove="remove"
      @loadQuestion="loadQuestion"
    />
  </div>
</template>

<script>
import ListQuestions from '@/components/questions/ListQuestions'
import FormQuestion from '@/components/questions/FormQuestion'
export default {
  components: { FormQuestion, ListQuestions },
  async fetch() {
    this.questions = await this.$axios.$get('/api/polls')
  },
  data() {
    return {
      questions: [],
      question: {
        creation_date: new Date().toISOString(),
        choices: []
      }
    }
  },
  methods: {
    async save() {
      const method = this.question.id ? 'put' : 'post'
      const id = this.question.id ? `${this.question.id}/` : ''
      const url = `/api/polls/${id}`
      try {
        await this.$axios[method](url, this.question)
        this.$toasted.global.defaultSuccess({
          msg: 'Operação realizada com sucesso'
        })
        this.$fetch()
      } catch (err) {
        for (const item in err.response.data) {
          this.$toast.error(item + ': ' + err.response.data[item])
        }
      }
    },
    loadQuestion(question) {
      this.question = {
        id: question.id,
        text: question.text,
        creation_date: question.creation_date,
        start_date: new Date(question.start_date),
        end_date: new Date(question.end_date),
        choices: question.choices
      }
    },
    async remove(question) {
      const url = `/api/polls/${question.id}`
      try {
        await this.$axios.$delete(url)
        this.$toasted.global.defaultSuccess({
          msg: 'Questão removida com sucesso'
        })
        this.$fetch()
      } catch (err) {
        for (const item in err.response.data) {
          this.$toast.error(item + ': ' + err.response.date[item])
        }
      }
    },
    reset() {
      this.question = {
        creation_date: new Date().toISOString()
      }
    }
  }
}
</script>

<style></style>