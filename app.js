Vue.component('card', {
  props: ['title', 'content'],
  data() {
    return {
      claps: 0
    }
  },
  template: `
  <div class="card">
  <h3 class="card-title">
    {{title}} 
  </h3>
  <div class="card-text">
    {{content}}
  </div>
  <div>{{claps}}</div>
  <button @click="clapForArticle">Clap for me</button>
  <button @click="deleteArticle">Delete me</button>
</div>`,
  methods: {
    deleteArticle(){
      this.$emit('delete-article', this.title)
    },
    clapForArticle(){
      this.claps++ 
    }
  }
})

new Vue({
  el: '#app',
  data: {
    articles: [{
      title: 'Angular',
      content: 'Vue'
    },{
      title: 'Learn',
      content: 'Vue Components'
    },{
      title: 'Learn',
      content: 'Vue API'
    }]
  },
  methods:{
    removeArticle(event){
      this.articles = this.articles.filter(article => article.title !==  event)
    }
  }
})