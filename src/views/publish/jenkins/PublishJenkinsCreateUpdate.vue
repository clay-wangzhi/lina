<template>
  <GenericCreateUpdatePage v-bind="$data" />
</template>

<script>
import { GenericCreateUpdatePage } from '@/layout/components'

export default {
  components: {
    GenericCreateUpdatePage
  },
  data() {
    return {
      fields: [
        [this.$t('common.Basic'), ['name']],
        [this.$t('publish.CICD'), ['git_repos', 'jenkins_job']],
        [this.$t('publish.IP'), ['test_ip', 'pre_ip']],
        [this.$t('common.Other'), ['comment']]
      ],
      fieldsMeta: {
        git_repos: {
          label: this.$t('publish.GitRepos')
        },
        jenkins_job: {
          label: this.$t('publish.JenkinsJob')
        },
        test_ip: {
          label: this.$t('publish.TestIP')
        },
        pre_ip: {
          label: this.$t('publish.PreIP')
        }
      },
      url: '/api/v1/publish/jenkins/',
      getUrl() {
        const params = this.$route.params
        let url = `/api/v1/applications/applications/`
        // let url = `/api/v1/publish/jenkins/`
        if (params.id) {
          url = `${url}${params.id}/`
        }
        return `${url}`
      },
      performSubmit(validValues) {
        const params = this.$route.params
        const baseUrl = `/api/v1/applications/applications/`
        // const baseUrl = `/api/v1/publish/jenkins/`
        const url = (params.id) ? `${baseUrl}${params.id}/` : baseUrl
        const method = this.getMethod()
        validValues.category = 'cloud'
        return this.$axios[method](`${url}?type=${validValues.type}`, validValues)
      }
    }
  },
  computed: {
    getMethod() {
      const params = this.$route.params
      if (params.id) {
        return 'put'
      } else {
        return 'post'
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
