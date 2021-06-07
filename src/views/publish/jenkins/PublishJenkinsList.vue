<template>
  <GenericListPage ref="GenericListTable" :table-config="tableConfig" :header-actions="headerActions" />
</template>

<script>
import { GenericListPage } from '@/layout/components'

export default {
  components: {
    GenericListPage
  },
  data() {
    const vm = this
    return {
      tableConfig: {
        url: '/api/v1/applications/applications/?category=db',
        columns: [
          'name', 'git_repos', 'jenkins_job', 'test_ip', 'pre_ip',
          'created_by', 'date_created', 'date_updated', 'comment', 'org_name', 'actions'
        ],
        columnsShow: {
          min: ['name', 'actions'],
          default: ['name', 'git_repos', 'jenkins_job', 'test_ip', 'pre_ip', 'comment', 'actions']
        },
        columnsMeta: {
          'name': {
            width: '100px'
          },
          'git_repos': {
            label: this.$t('publish.GitRepos'),
            width: '450px'
          },
          'jenkins_job': {
            label: this.$t('publish.JenkinsJob'),
            width: '140px'
          },
          'test_ip': {
            label: this.$t('publish.TestIP'),
            width: '150px'
          },
          'pre_ip': {
            label: this.$t('publish.PreIP'),
            width: '150px'
          },
          actions: {
            prop: 'actions',
            formatterArgs: {
              onClone: ({ row }) => {
                vm.$router.push({ name: 'PublishJenkinsCreate', query: { type: row.type, clone_from: row.id }})
              },
              performDelete: function({ row, col, cellValue, reload }) {
                this.$axios.delete(
                  `/api/v1/applications/applications/${row.id}/`
                ).then(res => {
                  this.$refs.GenericListTable.$refs.ListTable.$refs.ListTable.reloadTable()
                  // this.$message.success(this.$t('common.deleteSuccessMsg'))
                }).catch(error => {
                  this.$message.error(this.$t('common.deleteErrorMsg') + ' ' + error)
                })
              }.bind(this)
            }
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
