<template>
  <el-card class="box-card primary box-margin">
    <div slot="header" class="clearfix">
      <i v-if="icon" :class="'fa ' + icon" />
      <span>{{ title }}</span>
    </div>
    <div>
      <el-table class="el-table" :data="content" :show-header="false">
        <el-table-column prop="name" />
        <el-table-column prop="auto_push" align="right">
          <template slot-scope="scope">
            <Switcher
              v-model="scope.row.auto_push"
              @change="HandleChangeAction(scope.$index, scope.row)"
            />
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>
import { Switcher } from '@/components'

export default {
  name: 'AutoPushCard',
  components: {
    Switcher
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    content: {
      type: Array,
      default: () => []
    },
    url: {
      type: String,
      default: ''
    }
  },
  methods: {
    HandleChangeAction(index, row) {
      this.$axios.patch(this.url, { auto_push: row.auto_push }
      ).then(res => {
        this.$message.success(this.$t('common.updateSuccessMsg'))
      }).catch(err => {
        this.$message.error(this.$t('common.updateErrorMsg' + ' ' + err))
      })
    }
  }
}
</script>

<style scoped>
  .box-margin {
    margin-bottom: 20px;
  }
  .el-table::before{
    display: none;
  }
  .el-table >>> td{
    border-bottom: none;
  }
</style>
