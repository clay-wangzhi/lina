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
      initial: {

      },
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
      url: '/api/v1/publish/publish/'
    }
  }
}
</script>

<style>
</style>
