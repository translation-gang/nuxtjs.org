<template>
  <div class="Content">
    <h1>{{ attrs.title }}</h1>
    <blockquote>
      <p>{{ attrs.description }}</p>
    </blockquote>
    <div class="video" v-if="attrs.youtube">
      <iframe class="youtube" :src="attrs.youtube" frameborder="0" allowfullscreen></iframe>
    </div>
    <h2>{{ $store.state.lang.examples.source_code }}</h2>
    <nuxt-files-tree :example="attrs.github" :key="attrs.github"></nuxt-files-tree>
    <div>
      <a v-if="attrs.livedemo" :href="attrs.livedemo" class="button" target="_blank">
        <span><div class="icon eye"></div></span>
        {{ $store.state.lang.links.live_demo }}
      </a>
      <a v-if="attrs.liveedit" :href="attrs.liveedit" class="button" target="_blank">
        <span><div class="icon edit"></div></span>
        {{ $store.state.lang.links.live_edit }}
      </a>
      <a :href="downloadLink" class="button" target="_blank">
        <span><div class="icon download"></div></span>
        {{ $store.state.lang.links.download }}
      </a>
    </div>
    <html-parser :content="body"></html-parser>
  </div>
</template>

<script>
import axios from 'axios'
import NuxtFilesTree from '~components/FilesTree.vue'
import HtmlParser from '~components/HtmlParser.vue'

export default {
  scrollToTop: true,
  components: {
    NuxtFilesTree,
    HtmlParser
  },
  async data ({ route, store, error }) {
    // Default data
    let data = {
      attrs: {},
      body: ''
    }
    let slug = route.params.slug || 'async-datas'
    const path = `/${store.state.lang.iso}/examples/${slug}`
    let res
    try {
      res = await axios.get(store.state.apiURI + path)
    } catch (err) {
      if (err.response.status !== 404) {
        return error({ statusCode: 500, message: 'Произошла ошибка' })
      }
      return error({ statusCode: 404, message: 'Страница примера не найдена' })
    }
    data.attrs = res.data.attrs
    data.body = res.data.body
    if (!data.attrs.title) console.error(`[${path}] Пожалуйста, укажите заголовок (title) во вводной части.`)
    if (!data.attrs.description) console.error(`[${path}] Пожалуйста, укажите описание (description) во вводной части.`)
    return data
  },
  computed: {
    downloadLink () {
      return 'https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/nuxt/nuxt.js/tree/master/examples/' + this.attrs.github
    }
  },
  head () {
    return {
      title: this.attrs.title,
      titleTemplate: '%s - Примеры Nuxt.js',
      meta: [
        { hid: 'description', name: 'description', content: this.attrs.description }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.button
{
  height: 48px;
  line-height: 46px;
  font-size: 14px;
  margin-bottom: 15px;
  margin-right: 35px;
  &:before
  {
    border-right: 24px solid;
    border-top: 24px solid transparent;
    border-bottom: 24px solid transparent;
    left: -24px;
    border-right-color: #35495e;
  }
  &:after
  {
    border-left: 24px solid;
    border-top: 24px solid transparent;
    border-bottom: 24px solid transparent;
    right: -24px;
    border-left-color: #35495e;
  }
  &:hover
  {
    &:before
    {
      border-right-color: darken(#35495e, 5%);
    }
    &:after
    {
      border-left-color: darken(#35495e, 5%);
    }
  }
  &:last-child
  {
    margin-right: 0;
  }
  .icon, .icon:before, .icon:after
  {
    color: #fff;
  }
}
</style>
