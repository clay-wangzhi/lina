<template>
  <GenericListPage :table-config="tableConfig" :header-actions="headerActions" />
</template>

<script>
import { GenericListPage } from '@/layout/components'

export default {
  components: {
    GenericListPage
  },
  data() {
    return {
      tableConfig: {
        url: '/api/v1/publish/jenkins/',
        columns: [
          'name', 'git_repos', 'jenkins_job', 'test_ip', 'pre_ip',
          'created_by', 'date_created', 'date_updated', 'comment', 'org_name', 'actions'
        ],
        columnsShow: {
          min: ['name', 'actions'],
          default: ['name', 'git_repos', 'jenkins_job', 'test_ip', 'pre_ip', 'comment', 'actions']
        },
        columnsMeta: {
          name: {
            formatter: null,
            width: '100px'
          },
          git_repos: {
            label: this.$t('publish.GitRepos'),
            width: '450px'
          },
          jenkins_job: {
            label: this.$t('publish.JenkinsJob'),
            width: '140px'
          },
          test_ip: {
            label: this.$t('publish.TestIP'),
            width: '150px'
          },
          pre_ip: {
            label: this.$t('publish.PreIP'),
            width: '150px'
          }
        }
      },
      headerActions: {
        hasMoreActions: false,
        hasExport: false,
        hasImport: false,
        createRoute: 'PublishJenkinsCreate'
      }
    }
  }
}
</script>

<style>

</style>
